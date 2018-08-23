/**
 * 商铺 @author sl204984
 * */ 
import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { gray, darkGray, baseColor, lightGray } from '../common-styles';
import CONFIG from '../config';

const AvatarImg = require('../../local-imgs/lovely.jpeg');

const { width } = Dimensions.get('window');
const imgCounts = 4;

export default class ShopItem extends React.Component {

  render() {
    const { 
      avatar,
      publisher, 
      point, 
      imgList,
      location,
      desc,
      vipType,
      onPress
    } = this.props;
    const _avatar = avatar ? { uri: CONFIG.IMG_HOST + avatar } : AvatarImg;
    return (
      <View 
        style={styles.itemContainer} 
        onStartShouldSetResponder={() => true}
        onResponderRelease={() => {
          typeof onPress === 'function' && onPress();
        }}
      >

        <View style={styles.headerBox}>
          <Image source={_avatar} style={styles.avator}></Image>
          <View style={styles.nameBox}>
            <Text style={styles.publisher}> 
              { publisher } 
            </Text>
            <Text style={styles.point}>信用值：{ point } </Text>
          </View>
        </View>

        {desc && (
          <Text style={styles.desc}>{ desc }</Text>
        )}

        <View style={styles.imageListBox}>
          {imgList.map((item, index) => {
            const imgSrc = CONFIG.IMG_HOST + item;
            return <Image key={index} source={{ uri: imgSrc }} style={styles.img} />
          })}
        </View>

        <View style={styles.locationBox}>
          <Text style={styles.locationLabel} >店铺地址: </Text>
          <Text style={styles.locationText}> 
            {location.length > 16 ?
              location.substring(0, 16) + '...' :
              location } 
          </Text>
        </View>
      </View>
    )
  }
}

const outerMargin = 10;
const outerWidth = width - outerMargin * 2;
const outerPadding = 10;
const imgInterval = 10;
const imgBoxPadding = 5;
const imgWidth = ~~(( outerWidth - outerPadding * 2 - imgCounts * imgInterval ) / imgCounts);

const styles = StyleSheet.create({
  itemContainer: {
    width: outerWidth,
    marginLeft: outerMargin,
    marginRight: outerMargin,
    marginBottom: 20,
    backgroundColor: 'white',
    paddingTop: outerPadding,
    paddingLeft: outerPadding,
    paddingRight: outerPadding,
    borderRadius: 10
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

  desc: {
    marginBottom: 10,
    color: darkGray
  },
  imageListBox: {
    flexDirection: 'row',
    height: imgWidth + imgBoxPadding * 2,
    paddingTop: imgBoxPadding,
    paddingBottom: imgBoxPadding,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: lightGray
  },
  img: {
    width: imgWidth,
    height: imgWidth,
    marginLeft: imgInterval,
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