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
    focusedInput: 'store',
    storeInput: ''
  }

  render() {
    const { store } = this.props;
    const { visible, focusedInput, storeInput } = this.state;
    return (
      <TouchableOpacity 
        style={styles.row} 
        onPress={() => this.setState({ visible: true })}
      >
        <Text>剩余数量</Text>
        <View style={styles.iconText}>
          <Text style={styles.iconTextValue}>{ store }</Text>
          <Icon name="angle-right" size={20} style={styles.sufIcon} color={gray} />
        </View>

        <Popup
          visible={visible} 
          title="请输入剩余数量"
          onCancel={() => this.setState({
            visible: false
          })}
        >
          <View style={styles.dialogContainer}>
            <View style={styles.inputContainer}>
              <View style={styles.dialogRow}>
                <View style={styles.label}>
                  <Text>剩余数量：</Text>
                </View>
                <InputText
                  name="store"
                  focused={focusedInput}
                  value={storeInput}
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
    const { storeInput } = this.state;
    const _store = storeInput + num;
    if(_store.indexOf('.') > -1) return;
    _store <= 9999 ?
      this.setState({ storeInput: _store }) :
      this.refs.toast.show('剩余数量最大值为 9,999');;
  }

  _onReply = () => {
    const { storeInput } = this.state;
    storeInput.length > 0 &&
      this.setState({ storeInput: storeInput.substr(0, storeInput.length - 1) });
  }

  _onOk = async () => {
    const { changeStore } = this.props;
    const { storeInput } = this.state;
    if(!storeInput) {
      this.refs.toast.show('请输入对应的剩余数量');
      return;
    }
    changeStore({ store: storeInput });
    await this.setState({
      visible: false,
      focusedInput: 'store'
    });
  }
}
