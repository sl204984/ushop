import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { headerStyles as styles } from './styles';

export default class HeaderText extends Component {

  render() {
    return (
      <View style={styles.headerBox}>
        <Text style={styles.headerText}>商城店铺</Text>
      </View>
    )
  }
}