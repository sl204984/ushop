import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { baseColor, white } from '../common-styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class CheckBox extends Component {
  componentWillReceiveProps() {

  }

  render() {
    const { value, onValueChange, children } = this.props;
    return (
      <TouchableWithoutFeedback onPress={() => {
        typeof onValueChange === 'function' &&
          onValueChange({
            target: { value: !value }
          });
      }}>
        <View style={styles.container}>
          <View style={ value ? styles.checked : styles.unChecked } >
            <Icon name="check" size={radiusWidth * 0.7} color={white} />
          </View>
          {children}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const radiusWidth = 18;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checked: {
    width: radiusWidth,
    height: radiusWidth,
    borderRadius: radiusWidth / 2,
    backgroundColor: baseColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5
  },
  unChecked: {
    width: radiusWidth,
    height: radiusWidth,
    borderRadius: radiusWidth / 2,
    borderWidth: 1,
    borderColor: baseColor,
    marginRight: 5
  }
})