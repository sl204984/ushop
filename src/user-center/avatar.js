import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { baseColor, white } from '../utils/common-styles';
// import ImagePicker from "react-native-image-picker";
import SyanImagePicker from 'react-native-syan-image-picker';
import Toast from 'react-native-root-toast';

const AvatarImg = require('../local-imgs/lovely.jpeg');

const { width, height } = Dimensions.get('window');

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

const options = {
  imageCount: 1,          // 最大选择图片数目，默认6
  isCamera: true,         // 是否允许用户在内部拍照，默认true
  isCrop: false,          // 是否允许裁剪，默认false
  CropW: ~~(width * 0.6), // 裁剪宽度，默认屏幕宽度60%
  CropH: ~~(width * 0.6), // 裁剪高度，默认屏幕宽度60%
  isGif: false,           // 是否允许选择GIF，默认false，暂无回调GIF数据
  showCropCircle: false,  // 是否显示圆形裁剪区域，默认false
  showCropFrame: true,    // 是否显示裁剪区域，默认true
  showCropGrid: false     // 是否隐藏裁剪区域网格，默认false
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
