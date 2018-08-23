import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Text, Animated, StyleSheet, Easing } from 'react-native';
import { baseColor, lightGray, black } from '../common-styles';
const AnimatedView = Animated.View;

export default class InputText extends Component {
  state = {
    blinkAnim: new Animated.Value(1)
  }

  componentWillUnmount() {
    if(Animated.stop) {
      Animated.stop();
      this.setState({ blinkAnim: new Animated.Value(1) });
    }
  }

  render() {
    const { value, focused, setFocus, name, isPrice = false } = this.props;
    const { blinkAnim } = this.state;
    const isFocused = focused === name;
    isFocused ? this.startAnimate() : this.stopAnimate();
    return (
      <TouchableWithoutFeedback onPress={() => {
        typeof setFocus === 'function' && setFocus(name);
      }}>
        <View style={styles.container}>
          {isPrice ? 
            <Text style={ value ? styles.input : styles.emptyInput }> ￥ </Text> : 
            null
          }
          {value ? 
            <Text>{ value }</Text> : 
            null
          }
          {isFocused ? (
            <AnimatedView style={[styles.inputCursor, { opacity: blinkAnim }]} />
          ) : null}
          {!value ? 
            <Text style={styles.emptyInput}>{ isPrice ? '0.00' : '0' }</Text> : 
            null
          }
        </View>
      </TouchableWithoutFeedback>
    )
  }

  startAnimate = () => {
    Animated.loop(
      Animated.timing(
        this.state.blinkAnim, {
          toValue: 0,
          easing: Easing.back(),
          duration: 1000
        }
      )
    ).start();
  }

  stopAnimate = () => {
    if(Animated.stop) {
      Animated.stop();
      this.setState({ blinkAnim: new Animated.Value(1) });
    }
  }
}

export const CheckNum = function({curval, newInput, decimalsL = 2}) {
  const _numArr = (curval + newInput).split('.');
  if(_numArr.length > 2) return false;
  if(_numArr[1] && _numArr[1].length > 2) return false;
  return true;
}

const inputH = 18;
const styles = StyleSheet.create({
  container: {
    height: inputH + 4,
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  inputCursor: {
    width: 2, 
    height: inputH, 
    backgroundColor: baseColor
  },
  input: {
    color: black
  },
  emptyInput: {
    color: lightGray
  }
});