import React, { Component } from 'react';

import { 
  View, 
  StyleSheet, 
  ScrollView, 
  Image, 
  Dimensions,
  TouchableOpacity
} from 'react-native';
import SyanImagePicker from 'react-native-syan-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';

import { lightGray, baseColor, white } from "../utils/common-styles";
import { maxFiles } from './constant';

const { width } = Dimensions.get('window');

const options = {
  imageCount: maxFiles,   // 最大选择图片数目，默认6
  isCamera: true,         // 是否允许用户在内部拍照，默认true
  isCrop: false,          // 是否允许裁剪，默认false
  CropW: ~~(width * 0.6), // 裁剪宽度，默认屏幕宽度60%
  CropH: ~~(width * 0.6), // 裁剪高度，默认屏幕宽度60%
  isGif: false,           // 是否允许选择GIF，默认false，暂无回调GIF数据
  showCropCircle: false,  // 是否显示圆形裁剪区域，默认false
  showCropFrame: true,    // 是否显示裁剪区域，默认true
  showCropGrid: false     // 是否隐藏裁剪区域网格，默认false
};

export default class ImgsDemo extends Component {

  render() {
    const {
      imgList = []
    } = this.props;
    return (
      <View style={styles.scrowView} >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {imgList.map((item, index) => (
            <View style={styles.imgBox} key={index}>
              <Image source={{ uri: item.uri }} style={styles.img} />
              <TouchableOpacity style={styles.delImg} onPress={() => {
                this._delImage(index);
              }}>
                <Icon name="md-close" size={delImgWidth - 2} color={white} />
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity style={styles.addImg} onPress={this._selectImage} >
            <Icon name="md-add" size={36} color={baseColor} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }

  _selectImage = async () => {
    const { changeImgs } = this.props;
    
    try {
      const photos = await SyanImagePicker.asyncShowImagePicker(options);
      changeImgs(photos);
      // 选择成功
    } catch (err) {
      // 取消选择，err.message为"取消"
    }
  
  }

  _delImage = index => {
    const { imgList = [], changeImgs } = this.props;
    imgList.splice(index, 1);
    changeImgs(imgList);
  }
}

const imgWidth = 60;
const imgMargin = 5;
const delImgWidth = 20;

const styles = StyleSheet.create({
  scrowView: {
    paddingLeft: 10,
    paddingRight: 10,
    width: width,
    height: imgWidth + imgMargin * 2
  },
  imgBox: {
    position: 'relative'
  },
  img: {
    width: imgWidth,
    height: imgWidth,
    margin: imgMargin
  },
  delImg: {
    width: delImgWidth,
    height: delImgWidth,
    borderRadius: delImgWidth / 2,
    backgroundColor: baseColor,
    position: 'absolute',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: white
  },
  addImg: {
    width: imgWidth,
    height: imgWidth,
    margin: imgMargin - 2,
    borderWidth: 1,
    borderColor: lightGray,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }
});