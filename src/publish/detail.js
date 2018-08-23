import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default class Detail extends Component {
  render() {
    const { value, changeValue } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          value={value}
          onChangeText={text => changeValue(text)}
          style={styles.textInput}
          defaultValue=""
          multiline={true}
          underlineColorAndroid="transparent"
          maxLength={200}
          style={styles.textInput}
          placeholder="请写下宝贝的故事吧~"/>
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
  },
  textInput: {
    padding: 0,
    width: '100%'
  }
});