import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-root-toast';
import {
  darkGray, baseColor, submitTextColor, littleFont,
  loginContainer, longConfirmBtn, row
} from '../utils/common-styles';
import Encryption from '../utils/encode';
import webApi from './webapi';

const numReg = /^[\d]+$/;
const pwdReg = /^[0-9a-zA-Z._-]{1,}$/;
export default class ForgetPwd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      password: '',
      showPwd: false
    }
  }

  render() {
    const { showPwd } = this.state;
    return (
      <View style={styles.container}>

        <View style={styles.row}>
          <Text style={styles.label}>手机号</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ mobile: text })}
            underlineColorAndroid="transparent"
            maxLength={11}
            placeholder="请输入绑定的手机号" />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>新密码</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ password: text })}
            underlineColorAndroid="transparent"
            maxLength={20}
            secureTextEntry={!showPwd}
            placeholder="请输入新密码" 
          />
          <Icon 
            name={ showPwd ? 'eye-off' : 'eye' } 
            size={20} 
            onPress={() => this.setState({ showPwd: !showPwd })} 
          />
        </View>

        {/* <View style={styles.row}>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ userName: text })}
            maxLength={6}
            underlineColorAndroid="transparent"
            placeholder="请输入验证码" />
          <Text style={styles.label}>获取验证码</Text>
        </View> */}

        <TouchableOpacity style={styles.loginBox} onPress={() => {
          this._modifyPwd();
        }}>
          <Text style={styles.loginText}>修改密码</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _modifyPwd = async () => {
    const { mobile, password } = this.state;
      
    if(mobile.length !== 11 || !mobile.startsWith('1') || !numReg.test(mobile)) {
      Toast.show('请输入正确的手机号~', {
        position: Toast.positions.CENTER
      });
      return;
    }
    if(!pwdReg.test(password)) {
      Toast.show('请输入正确格式的密码~', {
        position: Toast.positions.CENTER
      });
      return;
    }

    const now = new Date();
    const submitDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    const { res, err } = await webApi.forgetPwd({
      mobile,
      password: Encryption.Encode(password),
      submitDate
    });

    if(!err) {
      Alert.alert(
        '账号提示',
        `${mobile}绑定的用户名为：${res.nickname}，新的密码为：${password}`,
        [{
          text: '确定', onPress: () => {
            this.props.navigation.navigate('Login');
          }
        }],
        { cancelable: false }
      );
      
    } else {
      Toast.show(err, {
        position: Toast.positions.CENTER
      });
    }
  }
}

const styles = StyleSheet.create({
  container: loginContainer.toJS(),
  row: row.toJS(),
  label: {
    width: 100
  },
  loginBox: longConfirmBtn.toJS(),
  loginText: {
    color: submitTextColor
  },
  forgetBox: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  register: {
    fontSize: littleFont,
    color: baseColor
  },
  forget: {
    fontSize: littleFont,
    color: darkGray
  },
  input: {
    flex: 1
  }
});