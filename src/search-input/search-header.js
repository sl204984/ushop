import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { textGrayColor, gray } from '../utils/common-styles';
import { StorageKeys, Storage } from '../utils/local-store';

export default class InputHeader extends Component {
  state = {
    searchText: ''
  }

  render() {
    const { searchText } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.searchContainer}>
        <Icon 
          name="angle-left" 
          size={28} 
          style={styles.icon} 
          color={gray} 
          onPress={() => {
            navigation.goBack();
          }} 
        />
        <View style={styles.searchBacground}>
          <Icon name="search" style={styles.preIcon} size={16} />
          <TextInput
            value={searchText}
            onChangeText={text => this.setState({ 
              searchText: text 
            })}
            underlineColorAndroid="transparent"
            maxLength={12}
            style={styles.input}
            placeholder="他密" 
            autoFocus
          />
        </View>

        <TouchableOpacity onPress={() => {
          this._saveHistory();
        }}>
          <Text style={styles.icon}>搜索</Text>
        </TouchableOpacity>
      </View>
    )
  }

  _saveHistory = async () => {
    const { searchText } = this.state;
    const _searchText = searchText.replace(/(^\s*)|(\s*$)/g, "");
    if(!_searchText) return;

    const { navigation, historyList, loadHistory } = this.props;
    const searchTextIndex = historyList.indexOf(_searchText);
    if(searchTextIndex > -1) {
      historyList.splice(searchTextIndex, 1);
      historyList.unshift(_searchText);
    } else {
      historyList.unshift(_searchText);
    }
    await Storage.save({
      key: StorageKeys.searchIputList,
      data: historyList,
    });
    await this.setState({ searchText: '' });
    await loadHistory();
    navigation.replace('SearchResult');
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  icon: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  searchBacground: {
    backgroundColor: 'white',
    flex: 1,
    height: 36,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  preIcon: {
    marginRight: 10,
    color: textGrayColor,
  },
  input: {
    flex: 1,
    padding: 0
  },
  searchText: {
    color: textGrayColor
  }
})