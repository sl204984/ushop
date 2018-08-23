import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { white, blackGray } from '../utils/common-styles';

const { width } = Dimensions.get('window');

export default class Desc extends Component {
  render() {
    const { shoppingName, desc } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.shoppingNameBox}>
          <Text style={styles.shoppingName}>{ shoppingName }</Text>
        </View>
        <Text style={styles.desc}>{ desc }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width,
    paddingRight: 10,
    paddingBottom: 20,
    paddingLeft: 10,
    backgroundColor: white
  },
  shoppingName: {
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    fontSize: 18,
    color: blackGray,
    lineHeight: 25
  },
  desc: {
    fontSize: 14,
    color: blackGray,
    lineHeight: 21
  }
});