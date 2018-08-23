import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import OrderItem, { btnStyle, btnListStyle, btnTextStyle } from '../utils/order-item';
import { white } from '../utils/common-styles';

export default class MyCollectionList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <FlatList data={[{a: 1, key: '1'}, {a: 2, key: '2'}]} renderItem={(item, index) => (
      <View style={styles.container} key={item.key + ''}>
        <OrderItem shoppingName={"商品名称"} price={123} />
        <View style={styles.btnList}>
          <TouchableOpacity style={styles.btnStyle} onPress={() => {}}>
            <Text style={styles.btnText}>编辑</Text>
          </TouchableOpacity>
        </View>
      </View>  
    )} />
      
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: white
  }, 
  btnList: btnListStyle.toJS(),
  btnStyle: btnStyle.toJS(),
  btnText: btnTextStyle.toJS()
})