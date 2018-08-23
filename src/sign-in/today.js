import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { baseColor } from '../utils/common-styles';
import { FormatDecimalXX } from '../utils/common-js';

export default class Today extends Component {
  constructor(props) {
    super(props);
  }

  monthMap = ['JAN.', 'FEB.', 'MAR.', 'APR.', 'MAY', 'JUNE', 'JULY', 'AUG.', 'SEPT.', 'OCT.', 'NOV.', 'DEC.'];
  // 今天的日期
  today = new Date();

  render() {
    return <View style={styles.container}>
      <Text style={styles.month}>
        { this.monthMap[this.today.getMonth()]}
      </Text>
      <Text style={styles.date}>
        { FormatDecimalXX(this.today.getDate()) }
      </Text>
      <Text style={styles.year}>
        { this.today.getFullYear() }
      </Text>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: baseColor,
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  month: {
    fontSize: 20,
    color: 'white'
  },
  date: {
    fontSize: 80,
    color: 'white'
  },
  year: {
    fontSize: 20,
    color: 'white'
  }
});