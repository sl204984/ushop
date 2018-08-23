import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
2
const { width } = Dimensions.get('window');
export default class LocationDetail extends Component {
  render() {
    const { value, changeValue } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={text => changeValue(text)}
          value={value}
          maxLength={50}
          style={styles.textInput}
          multiline
          underlineColorAndroid="transparent"
          placeholder="请输入详细街道地址，不超过50个字"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    width: width,
    flexDirection: 'row',
    marginBottom: 10,
  },
  textInput: {
    padding: 0,
    width: '100%'
  }
});