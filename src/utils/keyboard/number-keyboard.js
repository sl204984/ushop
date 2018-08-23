import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
import { lightGray, baseColor, white } from '../common-styles';
import Icon from 'react-native-vector-icons/FontAwesome';

// step-backward
const { width } = Dimensions.get('window');

export default class NumberKeyboard extends Component {

  render() {
    const { onCancel, onOk, onNumPress, onReply } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.numberContainer}>
          {numbers.map(item => (
            <View style={[styles.numberBox, styles.borderTop, styles.borderRight]} key={item}>
              <TouchableOpacity style={styles.flexCenter} onPress={() => {
                typeof onNumPress === 'function' && onNumPress(item);
              }}>
                <Text style={styles.number}>{ item }</Text>
              </TouchableOpacity>
            </View>
          ))}

            <View style={[styles.numberBox, styles.borderTop, styles.borderRight]} >
              <TouchableOpacity style={styles.flexCenter} onPress={onCancel}
              >
                <Icon name="angle-double-down" size={20} />
              </TouchableOpacity>
            </View>
        </View>

        <View style={styles.operatesContanier}>
          <View style={[styles.operatesBox, styles.borderTop]}>
            <TouchableOpacity style={styles.flexCenter} onPress={onReply}>
              <Icon name="reply" size={20} />
            </TouchableOpacity>
          </View>

          <View style={[styles.confirmBtn, styles.operatesBox, styles.borderTop]} >
            <TouchableOpacity style={styles.flexCenter} onPress={onOk}>
              <Text style={styles.confirmBtnText}>确定</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0'];
const styles = StyleSheet.create({
  container: {
    width,
    flexDirection: 'row'
  },
  numberContainer: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  numberBox: {
    flexGrow: 1,
    flexBasis: '33%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  },
  number: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  operatesContanier: {
    flex: 1
  },
  operatesBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  confirmBtn: {
    backgroundColor: baseColor,
  },
  confirmBtnText: {
    color: white
  },
  borderRight: {
    borderRightWidth: 1,
    borderRightColor: lightGray
  },
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: lightGray
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  }
})