import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { fromJS } from 'immutable';

import { colorhot, darkGray, lightGray } from '../common-styles';

import CONFIG from '../config';

export default class OrderItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { imgUrl, method, shoppingName, price } = this.props;
    const _orderImg = `${CONFIG.IMG_HOST}static/shopping/lipstick`;
    return <View style={styles.container}>
      <Image style={styles.image} source={{uri: _orderImg}} />
      <View style={styles.detailInfo}>
        <Text style={styles.shoppingName}>{ shoppingName }</Text>
        <Text style={styles.price}>￥ { price }</Text>
      </View>
    </View>
  }
}

const padding = 10;
const outerHeight = 100;
const styles = StyleSheet.create({
  container: {
    height: outerHeight,
    width: '100%',
    flexDirection: 'row',
    padding: padding,
  }, 
  image: {
    width: outerHeight - padding * 2,
    height: outerHeight - padding * 2,
    marginRight: padding,
  },
  detailInfo: {
    width: '100%',
    justifyContent: 'space-between'
  },
  shoppingName: {
    
  },
  price: {
    color: colorhot
  }
});



export const btnListStyle = fromJS({
  flexDirection: 'row',
  height: 40,
  alignItems: 'center',
  borderTopColor: lightGray,
  borderTopWidth: 1,
  paddingLeft: 15,
  paddingRight: 15,
  justifyContent: 'flex-end'
});

export const btnStyle = fromJS({
  padding: 5,
  borderColor: lightGray,
  borderRadius: 3,
  borderWidth: 1,
});

export const btnTextStyle = fromJS({
  color: darkGray
})