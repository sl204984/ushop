import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from './feature-list';

import { gray } from '../utils/common-styles';

export default class Setting extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    const { navigate } = this.props;
    return <View style={styles.container}>
      <TouchableOpacity style={styles.row} onPress={() => {
        navigate('Settings');
      }}>
        <View style={styles.iconText}>
        <Icon name="gear" size={20} style={styles.preIcon} color={gray} />
          <Text>设置</Text>
        </View>
        <Icon name="angle-right" size={20} style={styles.sufIcon} color={gray} />

      </TouchableOpacity>
    </View>
  }
}
