import React, { Component } from 'react';
import { StyleSheet, Modal, View, Dimensions } from 'react-native';
import { modalOpacityColor } from '../common-styles';

const { width, height } = Dimensions.get('window');

export default class BaseModal extends Component {
  render() {
    const { visible, children, onRequestClose } = this.props;
    return (
      <Modal 
        visible={visible}
        animationType="slide"
        transparent
        onRequestClose={onRequestClose}
      >
        <View style={styles.container}>
          { children }
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: modalOpacityColor,
    width,
    height: '100%',
    flexDirection: 'row'
  }
})