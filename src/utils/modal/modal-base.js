import React, { Component } from 'react';
import { StyleSheet, Modal, View, Dimensions, Animated } from 'react-native';
import { modalOpacityColor } from '../common-styles';

const { width, height } = Dimensions.get('window');

export default class BaseModal extends Component {

  state = {
    slideAnim: new Animated.Value(height)
  }

  componentWillReceiveProps(newProps) {
    console.log('newProps.visible', newProps.visible);
    if(newProps.visible) {
      Animated.timing(
        this.state.slideAnim,
        {
          toValue: 0,
          duration: 300
        }
      ).start();
    }
  }

  render() {
    const { slideAnim } = this.state;
    const { visible, children, onRequestClose } = this.props;
    return (
      <Modal 
        visible={visible}
        animationType="none"
        transparent
        onRequestClose={onRequestClose}
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
    flexDirection: 'row'
  }
})