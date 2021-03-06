import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import GoodsItem from '../utils/goods-item-simple';
import { textGrayColor, white } from '../utils/common-styles';
const { width } = Dimensions.get('window');

export default class Recommend extends Component {
  render() {
    const { recommendList } = this.props;
    return (
      <View style={styles.container}>

        <View style={styles.topLine}>
          <View style={styles.line} />
          <Text style={styles.topText}>猜你喜欢</Text>
          <View style={styles.line} />
        </View>
        <FlatList data={[
            {
              "publisher": "sl204984",
              "avatar": "avatar/lovely.jpeg",
              "shoppingName": "学习用品",
              "imgList": ["shopping/book.jpg", "shopping/lipstick.jpeg", "shopping/download.jpg", "shopping/download.jpg", "shopping/lipstick.jpeg", "shopping/lipstick.jpeg", "shopping/pen.jpeg", "shopping/lipstick.jpeg"],
              "location": "江苏南京",
              "price": 60,
              "point": 100,
              "key": "key-0.015409212120909066"
            }, {
              "publisher": "sl204984",
              "avatar": "avatar/lovely.jpeg",
              "shoppingName": "学习用品",
              "imgList": ["shopping/pen.jpeg", "shopping/lipstick.jpeg", "shopping/download.jpg", "shopping/fan.jpg", "shopping/pen.jpeg", "shopping/fan.jpg", "shopping/download.jpg", "shopping/pen.jpeg", "shopping/fan.jpg"],
              "location": "江苏南京",
              "price": 60,
              "point": 100,
              "key": "key-0.6313515688832319"
            }, {
              "publisher": "sl204984",
              "avatar": "avatar/lovely.jpeg",
              "shoppingName": "学习用品",
              "imgList": ["shopping/book.jpg", "shopping/lipstick.jpeg", "shopping/lipstick.jpeg", "shopping/book.jpg", "shopping/pen.jpeg", "shopping/pen.jpeg", "shopping/pen.jpeg", "shopping/pen.jpeg"],
              "location": "江苏南京",
              "price": 60,
              "point": 100,
              "key": "key-0.2759685649339936"
            }, {
              "publisher": "sl204984",
              "avatar": "avatar/lovely.jpeg",
              "shoppingName": "学习用品",
              "imgList": ["shopping/book.jpg", "shopping/download.jpg", "shopping/fan.jpg", "shopping/download.jpg", "shopping/download.jpg"],
              "location": "江苏南京",
              "price": 60,
              "point": 100,
              "key": "key-0.13840673100925915"
            }, {
              "publisher": "sl204984",
              "avatar": "avatar/lovely.jpeg",
              "shoppingName": "学习用品",
              "imgList": ["shopping/book.jpg", "shopping/download.jpg", "shopping/download.jpg", "shopping/pen.jpeg", "shopping/pen.jpeg"],
              "location": "江苏南京",
              "price": 60,
              "point": 100,
              "key": "key-0.23058671315398005"
            }, {
              "publisher": "sl204984",
              "avatar": "avatar/lovely.jpeg",
              "shoppingName": "学习用品",
              "imgList": ["shopping/download.jpg", "shopping/lipstick.jpeg", "shopping/fan.jpg", "shopping/pen.jpeg", "shopping/pen.jpeg", "shopping/lipstick.jpeg", "shopping/fan.jpg", "shopping/download.jpg", "shopping/book.jpg"],
              "location": "江苏南京",
              "price": 60,
              "point": 100,
              "key": "key-0.630424308681498"
            }, {
              "publisher": "sl204984",
              "avatar": "avatar/lovely.jpeg",
              "shoppingName": "学习用品",
              "imgList": ["shopping/fan.jpg", "shopping/download.jpg", "shopping/pen.jpeg", "shopping/fan.jpg", "shopping/book.jpg", "shopping/fan.jpg", "shopping/lipstick.jpeg", "shopping/book.jpg"],
              "location": "江苏南京",
              "price": 60,
              "point": 100,
              "key": "key-0.11802392436875175"
            }, {
              "publisher": "sl204984",
              "avatar": "avatar/lovely.jpeg",
              "shoppingName": "学习用品",
              "imgList": ["shopping/book.jpg", "shopping/fan.jpg", "shopping/lipstick.jpeg", "shopping/pen.jpeg", "shopping/fan.jpg", "shopping/fan.jpg", "shopping/book.jpg", "shopping/pen.jpeg", "shopping/book.jpg"],
              "location": "江苏南京",
              "price": 60,
              "point": 100,
              "key": "key-0.9240868279675636"
            }, {
              "publisher": "sl204984",
              "avatar": "avatar/lovely.jpeg",
              "shoppingName": "学习用品",
              "imgList": ["shopping/fan.jpg", "shopping/book.jpg", "shopping/book.jpg", "shopping/fan.jpg", "shopping/pen.jpeg"],
              "location": "江苏南京",
              "price": 60,
              "point": 100,
              "key": "key-0.29067344956149377"
            }, {
              "publisher": "sl204984",
              "avatar": "avatar/lovely.jpeg",
              "shoppingName": "学习用品",
              "imgList": ["shopping/fan.jpg", "shopping/book.jpg", "shopping/book.jpg", "shopping/fan.jpg", "shopping/lipstick.jpeg", "shopping/lipstick.jpeg"],
              "location": "江苏南京",
              "price": 60,
              "point": 100,
              "key": "key-0.0896433643388801"
            }
          ]} 
          numColumns={2}
          renderItem={this._renderItem}
        />
        
      </View>
    )
  }

  _renderItem = ({ item }) => {
    const { navigation } = this.props;
    return (
      <View style={styles.recommendItem}>
        <GoodsItem 
          shoppingName={item.shoppingName} 
          price={item.price}
          imgSrc={item.imgList[0]}
          width={itemWidth}
          onPress={() => {
            navigation.push('GoodsDetail', {
              goodsDetail: item
            });
          }}
        />
      </View>
    )
  }
}

const padding = 10;
const itemWidth = ~~((width - padding * 3) / 2);

const styles = StyleSheet.create({
  container: {
    width,
    paddingLeft: padding,
    marginBottom: 10
  },
  topLine: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    marginBottom: 20
  },
  topText: {
    color: textGrayColor
  },
  line: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    borderBottomWidth: 1,
    borderBottomColor: textGrayColor
  },
  recommendItem: {
    width: itemWidth,
    marginRight: 10,
    marginBottom: 10,
  }
});