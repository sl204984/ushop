import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { narrowRow, baseColor } from '../common-styles';

export default class TabItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, selectedCode, onSelect } = this.props;
    return <View style={styles.tabLabel}>
      <FlatList
        data={data}
        keyExtractor={item => item.code} 
        renderItem={({item}) => (
          <TouchableOpacity style={styles.row} onPress={() => {
            typeof onSelect === "function" && onSelect(item)
          }}>
            <Text>{ item.name }</Text>
            { selectedCode === item.code && <View style={styles.checked} />}
          </TouchableOpacity>)}
      />
    </View>
  }
}


const styles = StyleSheet.create({
  tabLabel: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white'
  },
  row: Object.assign(narrowRow.toJS(), {
    marginTop: 0,
    marginBottom: 0,
  }),
  checked: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: baseColor
  }
});
