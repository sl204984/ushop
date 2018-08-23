import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { rowStyles as styles } from './styles';
import { gray } from '../utils/common-styles';
import { Popup } from '../utils/modal';
import InputText from '../utils/input';
import { NumberKeyboard } from '../utils/keyboard';
import Toast from 'react-native-easy-toast';

export default class Count extends Component {
  state = {
    visible: false,
    focusedInput: 'count',
    countInput: ''
  }

  render() {
    const { count } = this.props;
    const { visible, focusedInput, countInput } = this.state;
    return (
      <TouchableOpacity 
        style={styles.row} 
        onPress={() => this.setState({ visible: true })}
      >
        <Text>数量</Text>
        <View style={styles.iconText}>
          <Text style={styles.iconTextValue}>{ count }</Text>
          <Icon name="angle-right" size={20} style={styles.sufIcon} color={gray} />
        </View>

        <Popup
          visible={visible} 
          title="请输入数量"
          onCancel={() => this.setState({
            visible: false
          })}
        >
          <View style={styles.dialogContainer}>
            <View style={styles.inputContainer}>
              <View style={styles.dialogRow}>
                <View style={styles.label}>
                  <Text>数量：</Text>
                </View>
                <InputText
                  name="count"
                  focused={focusedInput}
                  value={countInput}
                  setFocus={(focused) => {
                    this.setState({ focusedInput: focused });
                  }} />
              </View>
            </View>

            <NumberKeyboard 
              onCancel={() => this.setState({ visible: false })}
              onOk={this._onOk}
              onNumPress={this._onNumPress}
              onReply={this._onReply}
            />
          </View>

          <Toast ref="toast" position='top' />

        </Popup>

      </TouchableOpacity>
    )
  }

  _onNumPress = num => {
    const { countInput } = this.state;
    const _count = countInput + num;
    if(_count.indexOf('.') > -1) return;
    countInput + num <= 99 ?
      this.setState({ countInput: _count }) :
      this.refs.toast.show('数量最大值为 99');
  }

  _onReply = () => {
    const { countInput } = this.state;
    countInput.length > 0 &&
      this.setState({ countInput: countInput.substr(0, countInput.length - 1) });
  }

  _onOk = async () => {
    const { changeCount } = this.props;
    const { countInput } = this.state;
    if(!countInput) {
      this.refs.toast.show('请输入对应的数量');
      return;
    }
    changeCount({ count: countInput });
    await this.setState({
      visible: false,
      focusedInput: 'count'
    });
  }
}
