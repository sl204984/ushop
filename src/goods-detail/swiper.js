import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import CONFIG from '../utils/config';
import { modalOpacityColor, white } from '../utils/common-styles';
const { width } = Dimensions.get('window');

export default class ImgSwiper extends Component {
  state = {
    curIndex: 0
  }

  render() {
    const { curIndex } = this.state;
    const { imgList } = this.props;
    return (
      <View style={styles.container}>
        <Swiper 
          height={height} 
          showsButtons={false}
          autoplay={false}
          loop={false}
          showsPagination={false}
          onIndexChanged={index => {
            this.setState({ curIndex: index });
          }}
        >
          {imgList.map((item, index) => (
            <Image source={{ uri: CONFIG.IMG_HOST + item }} key={index} style={styles.imageWrap} resizeMode="stretch" />
          ))}
        </Swiper>
        <View style={styles.pagination}>
          <Text style={styles.paginationText}>{curIndex + 1} / {imgList.length}</Text>
        </View>
      </View>
    )
  }
}

const height = width;
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    position: 'relative'
  },
  imageWrap: {
    width: width,
    height: height,
    backgroundColor: white
  },
  pagination: {
    width: 60,
    height: 24,
    borderRadius: 12,
    backgroundColor: modalOpacityColor,
    position: 'absolute',
    right: 20,
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  paginationText: {
    color: white,
    fontSize: 12
  }
});