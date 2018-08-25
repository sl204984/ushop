import React, { Component } from 'react';
import { StyleSheet, Modal, View, Dimensions, Animated } from 'react-native';
import { modalOpacityColor } from '../common-styles';

const { width, height } = Dimensions.get('window');

const heightHalf = height * 1.3;

export default class BaseModal extends Component {

  state = {
    slideAnim: new Animated.Value(heightHalf)
  }

  componentWillReceiveProps(newProps) {
    if(newProps.visible) {
      Animated.timing(
        this.state.slideAnim,
        {
          toValue: 0,
          duration: 500
        }
      ).start();
    } else {
      this.setState({
        slideAnim: new Animated.Value(heightHalf)
      })
    }
  }

  render() {
    const { slideAnim } = this.state;
    const { visible, children, onRequestClose } = this.props;
    return (
      <Modal 
        visible={!!visible}
        animationType="fade"
        transparent
        onRequestClose={onRequestClose}
        hardwareAccelerated
      >
        <View style={styles.container}>
          <Animated.View style={{
            ...styles.animatedView,
            top: slideAnim,
            left: 0
          }}>
            { children }
          </Animated.View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: modalOpacityColor,
    width,
    height,
  },
  animatedView: {
    position: 'absolute',
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center'
  }
})