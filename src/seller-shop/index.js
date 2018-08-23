import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Header from './header';
import { paddingTop } from '../utils/common-styles';

const { width } = Dimensions.get('window');
export default class SellerShop extends Component {
  render() {
    const { navigation } = this.props;
    const _shopInfo = navigation.getParam('shopInfo');
    return (
      <View style={styles.container}>
        <Header 
          owner={_shopInfo.publisher} 
          avatar={_shopInfo.avatar} 
          point={_shopInfo.point} 
          navigation={navigation}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    alignItems: 'center',
    paddingTop: paddingTop,
  },
})