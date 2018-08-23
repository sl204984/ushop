import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { baseColor, white } from '../utils/common-styles';
// import ImagePicker from "react-native-image-picker";
import Toast from 'react-native-root-toast';

const AvatarImg = require('../local-imgs/lovely.jpeg');

// 选择图片配置项
const ImagePickerOpt = {
  title: '选择图片',
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '从图库选择',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

export default class Avatar extends Component {
  state = {
    avatar: '',
    isStatic: false
  }

  render() {
    const { avatar, isStatic } = this.state;
    const _avatar = avatar ? { uri: avatar, isStatic } : AvatarImg;
    return (
      <View style={styles.container}>
        <View style={styles.avatarWrap}>
          <TouchableOpacity  onPress={this._selectImg} >
            <Image style={styles.avatarImg} source={_avatar}/>
          </TouchableOpacity>
          <Text style={styles.avatarText}>大浪浪</Text>
        </View>
      </View>
    );
  }

  _selectImg = () => {
    // showImagePicker ===> 弹出选择相机、相册框
    // launchImageLibrary ===> 弹出相册
    // ImagePicker.launchCamera 弹出相机
    // ImagePicker.showImagePicker(ImagePickerOpt, response => {
    //   if (response.error) {
    //     Toast.show('选择图片失败，请重新选择', {
    //       position: Toast.positions.CENTER
    //     });
    //   } else if (!response.didCancel) {
    //     if (Platform.OS === 'android') {
    //       this.setState({ avatar: response.uri, isStatic: true });
    //     } else {
    //       this.setState({ avatar: response.uri.replace('file://', ''), isStatic: true });
    //     }
    //     // You can also display the image using data:
    //     // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    //   }
    // });
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },
  avatarWrap: {
    width: '100%',
    height: 200,
    backgroundColor: baseColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarImg: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginBottom: 15
  },
  avatarText: {
    color: white
  }
});
