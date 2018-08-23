import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { littleFont, gray, lightGray, baseColor } from '../common-styles';

const { width } = Dimensions.get('window');

export default class MessageItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { 
      avator,
      publisher,
      chartInfo,
      shoppingImg,
      dateInfo,
      unread
    } = this.props;
    const _publisher = publisher.length > 12 ? publisher.substr(0, 10) + '...' : publisher;
    const _chartInfo = chartInfo.length > 20 ? chartInfo.substr(0, 20) + '...' : chartInfo;
    return <View style={styles.itemContainer}>

      <Image style={styles.avatar} source={avator} />

      <View style={styles.messageBox}>
        <View style={styles.topText}>
          <Text style={styles.publisher}>{ _publisher }</Text>
          <Text style={styles.chartInfo}>{ _chartInfo }</Text>
        </View>
        <View style={styles.bottomText}>
          <Text style={styles.dateInfo}>{ dateInfo }</Text>
          { unread && <View style={styles.unread} /> }
        </View>
      </View>

      <Image style={styles.shoppingImg} source={shoppingImg} />

    </View>
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    width: width,
    backgroundColor: 'white',
    padding: 10,
    height: 100,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: lightGray
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 5
  },
  messageBox: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10,
  },

  topText: {
    flex: 1
  },
  publisher: {
    marginBottom: 5,
  },
  chartInfo: {
    fontSize: littleFont,
    color: gray
  },

  bottomText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dateInfo: {
    fontSize: littleFont,
    color: gray
  },
  unread: {
    backgroundColor: baseColor,
    width: 6,
    height: 6,
    borderRadius: 3
  },

  shoppingImg: {
    width: 80,
    height: 80
  }
})
