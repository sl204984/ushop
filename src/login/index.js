import React, { Component } from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import Toast from 'react-native-root-toast';
import {
  titleColor, 
  fontBold, 
  darkGray, 
  baseColor, 
  submitTextColor, 
  littleFont,
  loginContainer, 
  longConfirmBtn, 
  row
} from '../utils/common-styles';
import { StorageKeys, Storage } from '../utils/local-store';
import Encryption from '../utils/encode';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import webApi from './webapi';
const nicknameReg = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
const pwdReg = /^[0-9a-zA-Z._-]{1,}$/;
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      password: '',
      showPwd: false
    }
  }

  render() {
    const { password, showPwd } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>U&nbsp;&nbsp;售</Text>

        <View style={styles.row}>
          <Text style={styles.label}>用户名</Text>
          <TextInput
            onChangeText={text => this.setState({nickname: text})}
            underlineColorAndroid="transparent"
            defaultValue={this.state.nickname}
            maxLength={16}
            style={styles.input}
            placeholder="请输入用户名"/>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>密码</Text>
          <TextInput
            value={password}
            onChangeText={text => this.setState({password: text})}
            underlineColorAndroid="transparent"
            maxLength={20}
            secureTextEntry={!showPwd}
            defaultValue={this.state.password}
            style={styles.input}
            placeholder="请输入密码"/>
            <Icon 
              name={ showPwd ? 'eye-off' : 'eye' } 
              size={20} 
              onPress={() => this.setState({ showPwd: !showPwd })} />
        </View>

        <TouchableOpacity style={styles.loginBox} onPress={() => {
          this._login();
        }}>
          <Text style={styles.loginText}>登录</Text>
        </TouchableOpacity>

        <View style={styles.forgetBox}>
          <Text style={styles.register} onPress={() => {
            this.props.navigation.navigate('Register');
          }}>新用户注册</Text>
          <Text style={styles.forget} onPress={() => {
            this.props.navigation.navigate('ForgetPwd');
          }}>忘记密码？</Text>
        </View>

      </View>
    );
  }

  _login = async () => {
    const {nickname, password} = this.state;
      
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
    const now = new Date();
    const submitDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    const { res, err } = await webApi.login({
      nickname,
      password: Encryption.Encode(password),
      submitDate
    });

    if(!err) {
      await Storage.save({
        key: StorageKeys.userInfo,
        data: res || {},
      });
      this.props.navigation.navigate('BottomNav');
    } else {
      Toast.show(err, {
        position: Toast.positions.CENTER
      });
    }
  }

}

const styles = StyleSheet.create({
  container: loginContainer.toJS(),
  title: {
    fontSize: 40,
    alignItems: 'center',
    marginBottom: 40,
    color: titleColor,
    fontWeight: fontBold
  },
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
  },
  icon: {
    marginLeft: 5,
    marginRight: 5
  }
});