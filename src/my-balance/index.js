import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import { baseColor, lightGray, narrowRow, white } from '../utils/common-styles';
import CONFIG from '../utils/config';

const IconPrefix = `${CONFIG.IMG_HOST}static/icons/`;
const IconMore = `${IconPrefix}more.png`;

export default class MyBalance extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    const balance = navigation.getParam('balance', 0);
    return <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>余额账户(元)</Text>
        <Text style={styles.balanceValue}>{ (balance).toLocaleString('en-US') }</Text>
      </View>

      <TouchableOpacity style={styles.row} onPress={() => {
      }}>
        <View style={styles.iconText}>
          <Text>充值</Text>
        </View>
        <Image source={{uri: IconMore}} style={styles.imageMore} />
      </TouchableOpacity>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  balanceContainer: {
    backgroundColor: baseColor,
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  balanceLabel: {
    color: lightGray,
    marginBottom: 20,
  },
  balanceValue: {
    color: 'white',
    fontSize: 40
  },
  row: Object.assign(narrowRow.toJS(), {
    backgroundColor: white,
    marginTop: 20
  }),
  imageMore: {
    width: 15,
    height: 15,
    marginLeft: 15,
  }
});