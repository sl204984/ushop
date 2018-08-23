import React, { Component } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { searchBoxStyles as styles } from './styles';

export default class SearchBox extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.header}>
        <Icon 
          name="angle-left" 
          size={28} 
          style={styles.preIcon} 
          onPress={() => {
            navigation.goBack();
          }} 
        />
        <View style={styles.searchBacground}>
          <TouchableOpacity 
            style={styles.searchBox} 
            onPress={() => {
              navigation.replace('SearchInput');
            }}
          >
            <Icon name="search" style={styles.preIcon} size={16} />
            <Text style={styles.searchText}>搜索</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

