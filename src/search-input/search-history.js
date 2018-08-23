import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { lightGray, textGrayColor } from '../utils/common-styles';
import { StorageKeys, Storage } from '../utils/local-store';

export default class SearchHistory extends Component {
  render() {
    const { historyList } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          {historyList.map((item, index) => (
            <TouchableOpacity 
              style={styles.historyItem} 
              key={index} 
              onPress={() => {
                this._saveHistory(item, index)
              }}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
          {
            historyList.length > 0 ? (
              <TouchableOpacity 
                style={styles.bottomLine} 
                onPress={this._clearHistoryList}
              >
                <Text style={styles.bottomText}>清空搜索历史</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.bottomLine}>
                <View style={styles.line} />
                  <Text style={styles.bottomText}>
                    暂无搜索记录
                  </Text>
                <View style={styles.line} />
              </View>
            )
          }
          
        </ScrollView>
      </View>
    )
  }

  _clearHistoryList = async () => {
    const { loadHistory } = this.props;
    await Storage.save({
      key: StorageKeys.searchIputList,
      data: []
    });
    await loadHistory();
  }

  _saveHistory = async (historyItem, historyIndex) => {
    const { navigation, historyList, loadHistory } = this.props;
    historyList.splice(historyIndex, 1);
    historyList.unshift(historyItem);
    await Storage.save({
      key: StorageKeys.searchIputList,
      data: historyList
    });
    await this.setState({ searchText: '' });
    await loadHistory();
    navigation.replace('SearchResult');
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'white'
  },
  historyContainer: {
    backgroundColor: 'white',
    width: '100%'
  },
  historyItem: {
    width: '100%',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: lightGray
  },
  bottomLine: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15,
  },
  bottomText: {
    color: textGrayColor
  },
  line: {
    flex: 1,
    margin: 15,
    borderBottomWidth: 1,
    borderBottomColor: lightGray
  }
});