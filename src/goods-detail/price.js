import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { white, colorhot, colorLigthHot, textGrayColor } from '../utils/common-styles';

const { width } = Dimensions.get('window');

export default class Price extends Component {
  render() {
    const { price, shipFee = 0 } = this.props;
    const isShipping = shipFee === 0;
    return (
      <View style={styles.container}>
        <View style={styles.priceBox}>
          <Text style={styles.priceText}>￥{price}</Text>
          {isShipping && <View style={styles.labelBox}>
            <Text style={styles.labelText}>包邮</Text>
          </View>}
        </View>
        {!isShipping && <Text style={styles.shipFeeText}>邮费：￥{shipFee}</Text>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: white
  },
  priceBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 16,
    color: colorhot
  },
  labelBox: {
    marginLeft: 5,
    backgroundColor: colorLigthHot,
    height: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 2,
    paddingRight: 2,
    borderRadius: 3,
  },
  labelText: {
    color: white,
    fontSize: 12
  },
  shipFeeText: {
    marginTop: 5,
    fontSize: 12,
    color: textGrayColor
  }
})