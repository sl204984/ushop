import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { baseColor, white } from '../utils/common-styles';
import SyanImagePicker from 'react-native-syan-image-picker';
import CONFIG from '../utils/config';
import { fetchQiniuToken, uploadImages } from './api';
const { width } = Dimensions.get('window');

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
    avatar: ''
  }

  render() {
    const { userInfo } = this.props;
    const { avatar } = this.state;
    const _avatar = { uri: avatar ? avatar : CONFIG.IMG_HOST + userInfo.avatar };
    return (
      <View style={styles.container}>
        <View style={styles.avatarWrap}>
          <TouchableOpacity onPress={this._selectImg} >
            <Image style={styles.avatarImg} source={_avatar}/>
          </TouchableOpacity>
          <Text style={styles.avatarText}>{ userInfo.nickname }</Text>
        </View>
      </View>
    );
  }

  _selectImg = async () => {
    const { userInfo } = this.props;
    try {
      const photos = await SyanImagePicker.asyncShowImagePicker(options);
      const uri = photos[0].uri;
      const uriStr = uri ? uri.split('.') : []; 
      const imgType = uriStr[uriStr.length - 1] || 'jpeg';
      // 从七牛获取token
      const { res: qiniuRes } = await fetchQiniuToken({
        sourceKey: userInfo.userId + '.' + imgType
      });
      // 
      const file = {
        key: qiniuRes.key,
        token: qiniuRes.token,
        file: { 
          uri: uri,
          type: 'multipart/form-data'
        },
        'x:userId': userInfo.userId
      };
      const { err } = await uploadImages(file);
      if(err) {
        Toast.show('图片上传失败，请重新上传~', {
          position: Toast.positions.CENTER
        });
        return;
      }
      
      await this.setState({ avatar: photos[0].uri });
      // 选择成功
    } catch (err) {
      // 取消选择，err.message为"取消"
    }
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
