/**
 * 商铺 @author sl204984
 * */ 
import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { gray, colorhot, lightGray, baseColor } from '../common-styles';
import CONFIG from '../config';
const AvatarImg = require('../../local-imgs/lovely.jpeg');

const { width } = Dimensions.get('window');

export default class GoodsItem extends React.Component {

  state = {
    dealTouchEvent: true
  }

  render() {
    const { 
      avatar,
      publisher, 
      point, 
      price,
      imgList,
      shoppingName,
      location
    } = this.props;
    const _avatar = avatar ? { uri: CONFIG.IMG_HOST + avatar } : AvatarImg;
    return (
      <View 
        style={styles.itemContainer}
      >

        <View style={styles.headerBox}>
          <Image source={_avatar} style={styles.avator}></Image>
          <View style={styles.nameBox}>
            <Text style={styles.publisher}> { publisher } </Text>
            <Text style={styles.point}>信用值：{ point } </Text>
          </View>
          <View>
            <Text style={styles.price}> ￥{ price } </Text>
          </View>
        </View>

        <ScrollView 
          style={styles.scrollView} 
          horizontal 
          showsHorizontalScrollIndicator={false}
          onTouchMove={this._onTouchMove}
          onTouchEnd={this._onTouchEnd}
        >
          {imgList.map((item, index) => {
            const imgSrc = CONFIG.IMG_HOST + item;
            return <Image key={index} source={{uri: imgSrc}} style={styles.img} />
          })}
        </ScrollView>

        <View style={styles.shoppingName} >
          <Text> { shoppingName } </Text>
        </View>

        <View style={styles.locationBox}>
          <Text style={styles.locationLabel} >发布于: </Text>
          <Text style={styles.locationText}> { 
            location.length > 16 ?
              location.substring(0, 16) + '...' :
              location
          } </Text>
        </View>
      </View>
    )
  }

  _onTouchMove = () => {
    const { dealTouchEvent } = this.state;
    dealTouchEvent && 
      this.setState({ dealTouchEvent: false });
  }

  _onTouchEnd = () => {
    const { dealTouchEvent } = this.state;
    if(!dealTouchEvent) {
      this.setState({ dealTouchEvent: true });
    } else {
      // todo 路由跳转
      typeof this.props.onPress === 'function' 
        && this.props.onPress();
    }
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    width: width,
    marginBottom: 20,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },

  headerBox: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  avator: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  nameBox: {
    flex: 1,
    padding: 5,
  },
  publisher: {
    paddingBottom: 5,
    paddingLeft: 5,
  },
  point: {
    paddingBottom: 5,
    paddingLeft: 5,
    color: gray
  },
  price: {
    paddingRight: 5,
    color: colorhot,
    fontSize: 18
  },

  scrollView: {

  },
  img: {
    width: 120,
    height: 120,
    margin: 5
  },
  shoppingName: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: lightGray
  },

  locationBox: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  locationLabel: {
    paddingRight: 5,
    color: gray
  },
  locationText: {
    color: baseColor
  }
});