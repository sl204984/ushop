import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CONFIG from '../utils/config';
import { white, gray } from '../utils/common-styles';
const AvatarImg = require('../local-imgs/lovely.jpeg');

const { width } = Dimensions.get('window');

// md-return-left arrow-left
export default class Header extends Component {
  render() {
    const { owner, avatar, point, navigation } = this.props;
    const _avatar = avatar ? { uri: CONFIG.IMG_HOST + avatar } : AvatarImg;
    return (
      <View style={styles.container}>

        <View style={styles.topRow}>
          <TouchableOpacity style={styles.textBoxBtn} onPress={() => {
            navigation.goBack();
          }}>
            <Icon name="angle-left" size={18} style={styles.preIcon} />
            <Text style={styles.textBtnText}>点此返回</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.textBoxBtn}>
            <Text style={styles.textBtnText}>我要开店</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sellerInfoBox}>
          <View>
            <Text style={styles.ownerText}>{ owner }的店铺</Text>
            <Text style={styles.pointText}>信用值：{ point }</Text>
          </View>
          <Image source={_avatar} style={styles.avatar} />
        </View>
        
        <View style={styles.bottomRow}>
          <TouchableOpacity style={styles.btnBox}>
            <Icon name="search" style={styles.preIcon} size={16} />
            <Text style={styles.btnText}>店铺内搜索</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.btnBox}>
            <Text style={styles.btnText}>赞该店铺</Text>
          </TouchableOpacity>

        </View>

      </View>
    )
  }
}

const searchBoxHeight = 32;
const styles = StyleSheet.create({
  topRow: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  textBoxBtn: {
    height: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textBtnText: {
    color: white,
    lineHeight: 20
  },
  container: {
    width,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 10
  },
  sellerInfoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  ownerText: {
    color: white,
    fontSize: 16,
    marginBottom: 5,
  },
  pointText: {
    color: white,
    fontSize: 12,
    marginBottom: 5
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 10,
  },
  
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  btnBox: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: gray,
    height: searchBoxHeight,
    alignItems: 'center',
    borderRadius: searchBoxHeight / 2,
    paddingLeft: 10,
    paddingRight: 10
  },
  preIcon: {
    marginRight: 5,
    color: white
  },
  btnText: {
    color: white,
    fontSize: 12
  },

  
});