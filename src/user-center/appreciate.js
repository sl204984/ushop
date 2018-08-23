import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { textGrayColor, white } from '../utils/common-styles'; 

export default class Appreciate extends Component {
  constructor(props) {
    super(props);
    this.appreciatesList = [{
      label: "超赞",
      count: 0,
      onPress: () => {}
    }, {
      label: "关注数",
      count: 0,
      onPress: () => {}
    }, {
      label: "粉丝数",
      count: 0,
      onPress: () => {}
    }]
  }

  render() {
    return <View style={styles.container}>
      {
        this.appreciatesList.map((item, index) => {
          return <TouchableOpacity style={styles.cell} key={index} onPress={() => {
            typeof item.onPress === "function" && item.onPress()
          }}>
            <Text>
              { item.count }
            </Text>
            <Text style={styles.label}>
              { item.label }
            </Text>
          </TouchableOpacity>
        })
      }
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: "100%",
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: white
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    color: textGrayColor,
    margin: 3
  }
});