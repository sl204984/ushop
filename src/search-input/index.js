import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { paddingTop } from '../utils/common-styles';
import InputHeader from './search-header';
import SearchHistory from './search-history';
import { StorageKeys, Storage } from '../utils/local-store';

const { width } = Dimensions.get('window');

export default class SearchInput extends Component {
  state = {
    historyList: []
  }

  componentDidMount() {
    this._loadSearchHistory();
  }

  render() {
    const { historyList } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <InputHeader 
          navigation={navigation} 
          historyList={historyList} 
          loadHistory={this._loadSearchHistory} 
        />
        <SearchHistory 
          navigation={navigation} 
          historyList={historyList} 
          loadHistory={this._loadSearchHistory} 
        />
      </View>
    )
  }

  // 将加载搜索列表放于顶层是为了防止查两边数据
  _loadSearchHistory = async () => {
    const res = await Storage.load({
      key: StorageKeys.searchIputList,
      // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
      autoSync: true,
      // syncInBackground(默认为true)意味着如果数据过期，
      // 在调用sync方法的同时先返回已经过期的数据。
      // 设置为false的话，则等待sync方法提供的最新数据(当然会需要更多时间)。
      syncInBackground: true
    });
    return this.setState({ historyList: res || [] });
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    alignItems: 'center',
    paddingTop: paddingTop,
  },
})