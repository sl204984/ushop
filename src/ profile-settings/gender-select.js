import React, { Component } from 'react';
import { Modal, View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { BaseModal } from '../utils/modal';

export default class GenderSelect extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { showGenderSelect, selectGender } = this.props;
    return (
      <BaseModal transparent={true} visible={showGenderSelect}>
        <TouchableOpacity style={styles.selectItem} onPress={() => { selectGender('男'); }}>
          <Text>男</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectItem} onPress={() => { selectGender('女'); }}>
          <Text>女</Text>
        </TouchableOpacity>
      </BaseModal>
    )
  }
}

const styles = StyleSheet.create({
  selectItem: {
    backgroundColor: 'white',
    width: '90%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 5,
  }
});