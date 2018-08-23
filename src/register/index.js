import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-root-toast';
import {
  darkGray, baseColor, submitTextColor, littleFont, loginContainer, longConfirmBtn, row
} from '../utils/common-styles';
import Encryption from '../utils/encode';
import webApi from './webapi';

const nicknameReg = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
const numReg = /^[\d]+$/;
const pwdReg = /^[0-9a-zA-Z._-]{1,}$/;
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      password: '',
      showPwd: false,
      mobile: '',
      securityCode: ''
    }
  }

  render() {
    const { password, showPwd } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.label}>用户名</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ nickname: text })}
            maxLength={10}
            underlineColorAndroid="transparent"
            placeholder="请输入用户名" />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>密码</Text>
          <TextInput
            value={password}
            style={styles.input}
            onChangeText={text => this.setState({ password: text })}
            underlineColorAndroid="transparent"
            maxLength={20}
            secureTextEntry={!showPwd}
            placeholder="请输入密码" />

            <Icon 
              name={ showPwd ? 'eye-off' : 'eye' } 
              size={20}
              onPress={() => this.setState({ showPwd: !showPwd })} />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>手机号</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={text => {
              this.setState({ mobile: text });
            }}
            underlineColorAndroid="transparent"
            maxLength={11}
            placeholder="请输入手机号" />
        </View>

        {/* <View style={styles.row}>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ securityCode: text })}
            underlineColorAndroid="transparent"
            maxLength={6}
            placeholder="验证码" />
          <Text style={styles.label} onPress={() => {
            Alert.alert('获取验证码', '验证码已发送至手机');
          }}>获取验证码</Text>
        </View> */}

        <TouchableOpacity style={styles.loginBox} onPress={() => {
          this.register();
        }}>
          <Text style={styles.loginText}>注册</Text>
        </TouchableOpacity>

        <View style={styles.protocolBox}>
          <Text style={styles.haveRead}>我已阅读</Text>
          <Text style={styles.protocol} onPress={() => {
            this.props.navigation.navigate('Protocol');
          }}>《用户条款协议》</Text>
        </View>

      </View>
    );
  }

  register = async () => {
    const { nickname, password, mobile } = this.state;
    if(!nicknameReg.test(nickname)) {
      Toast.show('请输入正确格式的昵称~', {
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
    if(mobile.length !== 11 || !mobile.startsWith('1') || !numReg.test(mobile)) {
      Toast.show('请输入正确的手机号~', {
        position: Toast.positions.CENTER
      });
      return;
    }
    const now = new Date();
    const submissionDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    
    const { err } = await webApi.register({
      nickname,
      password: Encryption.Encode(password),
      mobile,
      submissionDate
    });

    if(!err) {
      this.props.navigation.navigate('Login');
    } else {
      Toast.show(err, {
        position: Toast.positions.CENTER
      })
    }

  }

}

const styles = StyleSheet.create({
  container: loginContainer.toJS(),
  row: row.toJS(),
  label: {
    width: 100,
  },
  loginBox: longConfirmBtn.toJS(),
  loginText: {
    color: submitTextColor
  },
  protocolBox: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  haveRead: {
    fontSize: littleFont,
    color: darkGray
  },
  protocol: {
    fontSize: littleFont,
    color: baseColor
  },
  input: {
    flex: 1
  }
});