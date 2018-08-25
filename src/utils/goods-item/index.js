/**
 * 商铺 @author sl204984
 * */ 
import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { gray, colorhot, lightGray, baseColor } from '../common-styles';
import CONFIG from '../config';
const AvatarImg = require('../../local-imgs/lovely.jpeg');

const { width } = Dimensions.get('window');

export default class GoodsItem extends React.Component {

  render() {
    const { 
      avatar,
      publisher, 
      point, 
      price,
      imgList,
      shoppingName,
      location,
      onPress
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
          horizontal 
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity 
            style={styles.imgBox} 
            onPress={onPress}
          >
            {imgList.map((item, index) => {
              const imgSrc = CONFIG.IMG_HOST + item;
              return <Image key={index} source={{uri: imgSrc}} style={styles.img} />
            })}
          </TouchableOpacity>
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

}

const containerPadding = 10;
const styles = StyleSheet.create({
  itemContainer: {
    width: width,
    marginBottom: 20,
    backgroundColor: 'white',
    paddingTop: containerPadding,
    paddingLeft: containerPadding,
    paddingRight: containerPadding,
  },

  headerBox: {
    flexDirection: 'row',
    marginBottom: containerPadding,
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

  imgBox: {
    flexDirection: 'row',
    minWidth: width - containerPadding * 2,
  },
  img: {
    width: 120,
    height: 120,
    margin: 5
  },
  shoppingName: {
    paddingTop: containerPadding,
    paddingBottom: containerPadding,
    borderBottomWidth: 1,
    borderBottomColor: lightGray
  },

  locationBox: {
    paddingTop: containerPadding,
    paddingBottom: containerPadding,
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