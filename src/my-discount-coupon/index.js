import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { white, baseColor } from '../utils/common-styles';

export default class MyDiscountCoupon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    const canUse = navigation.getParam('canUse', false);
    return <FlatList data={[{a: 1, key: '1'}, {a: 2, key: '2'}]} renderItem={(item, index) => (
      <TouchableOpacity style={styles.container} key={item.key + ''}>
        <View style={styles.discountContainer}>
          <Text style={styles.discountPre}>折扣</Text>  
          <Text style={styles.discount}>9.5</Text>
          <Text style={styles.discountSuf}>折</Text>
        </View>
        <View style={styles.discountLabel}>
          <Text style={styles.labaeText}>优惠券</Text>  
        </View>
      </TouchableOpacity>  
    )} />
      
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: white,
    height: 100,
    flexDirection: 'row',
  },
  discountContainer: {
    flex: 4,
    borderWidth: 2,
    borderColor: baseColor,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  discount: {
    fontSize: 40,
    margin: 5,
    color: baseColor
  },
  discountLabel: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: baseColor
  },
  labaeText: {
    fontSize: 20,
    color: white
  }
})