import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import CONFIG from '../config';
import { white, blackGray, cocolorhot, colorhot } from '../common-styles';

export default class GoodsItemSimple extends Component {
  render() {
    const { imgSrc, width = '100%', shoppingName, price, onPress } = this.props;
    const _imgSrc = CONFIG.IMG_HOST + imgSrc;

    return (
      <View 
        style={{ width: width, backgroundColor: white, borderRadius, overflow: 'hidden' }} 
        onStartShouldSetResponder={() => true}
        onResponderRelease={() => {
          typeof onPress === 'function' && onPress();
        }}
      >
        <Image 
          source={{ uri: _imgSrc }} 
          style={{ width: width, height: width, borderTopLeftRadius: 10 }} 
          resizeMode="stretch" 
        />

        <View style={styles.shoppingNameBox}>
          <Text style={styles.shoppingName}>{ shoppingName }</Text>
        </View>

        <Text style={styles.price}>￥{ price }</Text>
      </View>
    )
  }
}

const borderRadius = 5;
const styles = StyleSheet.create({
  shoppingNameBox: {
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: 30
  },
  borderTopRadius: {
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius
  },
  shoppingName: {
    fontSize: 12,
    color: blackGray
  },
  price: {
    color: colorhot,
    padding: 10
  }
});