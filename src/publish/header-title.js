import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default class HeaderTitle extends Component {
  render() {
    const { value, changeValue } = this.props;
    return (
      <View style={styles.headerTitle}>
        <TextInput
          onChangeText={text => changeValue(text)}
          value={value}
          style={styles.textInput}
          maxLength={20}
          underlineColorAndroid="transparent"
          placeholder="标题，不超过20个字"
        />
      </View>
    )
  }
}

const padding = 20;
const styles = StyleSheet.create({
  container: {
    paddingLeft: padding,
    paddingRight: padding,
    width: width,
    height: 40,
    flexDirection: 'row',
  },
  textInput: {
    padding: 0,
    width: width - padding * 2
  }
});