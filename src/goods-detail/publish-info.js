import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { white, textGrayColor, lightGray } from '../utils/common-styles';
import CONFIG from '../utils/config';

const { width } = Dimensions.get('window');

export default class PublishInfo extends Component {
  render() {
    const { publisher, avatar, location, point } = this.props;
    const _avatar = CONFIG.IMG_HOST + avatar;
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image source={{ uri: _avatar }} style={styles.avatar} resiezeMode="stretch" />
          <View style={styles.textBox}>
            <View style={styles.publisherBox}>
              <Text style={styles.publisher}>{publisher}</Text>
              <Text style={styles.point}>信用值：{point}</Text>
            </View>
            <Text style={styles.location}>发布于：{location}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const avatarWidth = 40;
const padding = 10;
const styles = StyleSheet.create({
  container: {
    width,
    padding,
    backgroundColor: white
  },
  innerContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: lightGray,
    paddingBottom: padding,
    width: width - padding * 2,
  },
  avatar: {
    width: avatarWidth,
    height: avatarWidth,
    marginRight: 5,
  },
  textBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  publisherBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  publisher: {
    fontSize: 16,
    justifyContent: 'center',
  },
  point: {
    fontSize: 14,
    justifyContent: 'center',
    color: textGrayColor
  },
  location: {
    fontSize: 14,
    justifyContent: 'center',
    color: textGrayColor
  }
});