import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { rowStyles as styles } from './styles';
import { gray } from '../utils/common-styles';
import { Popup } from '../utils/modal';
import InputText, { CheckNum } from '../utils/input';
import CheckBox from '../utils/check-box';
import { NumberKeyboard } from '../utils/keyboard';
import Toast from 'react-native-easy-toast';

export default class Price extends Component {
  state = {
    visible: false,
    isShipping: false,
    focusedInput: 'price',
    priceInput: '',
    shipInput: ''
  }

  render() {
    const { price, shipFee } = this.props;
    const { visible, isShipping, focusedInput, priceInput, shipInput } = this.state;
    return (
      <TouchableOpacity 
        style={styles.row} 
        onPress={() => this.setState({ visible: true })}
      >
        <Text>价格</Text>
        <View style={styles.iconText}>
          <Text style={styles.iconTextValue}>{ price }</Text>
          {shipFee > 0 && (
            <Text style={styles.count}>{ ` + 邮费${shipFee}` }</Text>
          )}
          <Icon name="angle-right" size={20} style={styles.sufIcon} color={gray} />
        </View>

        <Popup 
          visible={visible} 
          title="请输入价格"
          onCancel={() => this.setState({
            visible: false
          })}
        >
          <View style={styles.dialogContainer}>
            <View style={styles.inputContainer}>
              <View style={styles.dialogRow}>
                <View style={styles.label}>
                  <Text>价格：</Text>
                </View>
                <InputText
                  name="price"
                  isPrice
                  focused={focusedInput}
                  value={priceInput}
                  setFocus={(focused) => {
                    this.setState({ focusedInput: focused });
                  }} />
              </View>

              <View style={styles.dialogRow}>
                <View style={styles.label}>
                  <Text>运费：</Text>
                </View>
                <InputText 
                  name="ship" 
                  isPrice
                  focused={focusedInput} 
                  value={shipInput}
                  setFocus={(focused) => {
                    this.setState({ focusedInput: focused, isShipping: false });
                  }} />
                <CheckBox value={isShipping} onValueChange={({ target }) => {
                  target.value ? 
                    this.setState({ isShipping: target.value, shipInput: '', focusedInput: '' }) : 
                    this.setState({ isShipping: target.value });
                }}>
                  <Text>包邮</Text>
                </CheckBox>
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
    const { focusedInput, priceInput, shipInput } = this.state;
    switch(focusedInput) {
      case 'price':
        if(!CheckNum({curval: priceInput, newInput: num})) return;
        priceInput + num <= 99999999 ?
          this.setState({ priceInput: priceInput + num }) :
          this.refs.toast.show('平台商品价格不能超过 99,999,999 元！');
        break;
      case 'ship':
        if(!CheckNum({curval: shipInput, newInput: num})) return;
        shipInput + num <= 999 ?
          this.setState({ shipInput: shipInput + num }) :
          this.refs.toast.show('运费最多999元！');
        break;
    }
  }

  _onReply = () => {
    const { focusedInput, priceInput, shipInput } = this.state;
    switch(focusedInput) {
      case 'price':
        priceInput.length > 0 &&
          this.setState({ priceInput: priceInput.substr(0, priceInput.length - 1) });
        break;
      case 'ship':
        shipInput.length > 0 &&
          this.setState({ shipInput: shipInput.substr(0, shipInput.length - 1) });
        break;
    }
  }

  _onOk = async () => {
    const { changePrice } = this.props;
    const { priceInput, shipInput } = this.state;
    if(!priceInput) {
      this.refs.toast.show('请输入价格');
      return;
    }
    const _priceInput = priceInput.endsWith('.') ? priceInput.substring(0, priceInput.length - 1) : priceInput;
    const _shipInput = shipInput.endsWith('.') ? shipInput.substring(0, shipInput.length - 1) : shipInput;
    changePrice({ price: _priceInput, shipFee: _shipInput });
    await this.setState({
      visible: false,
      focusedInput: 'price'
    });
  }
}
