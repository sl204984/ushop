import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { classifyListStyles as styles } from './styles';
import { TabList } from '../utils/constant';
export default class ClassifyList extends Component {
  render() {
    const { curTabIndex, changeTab } = this.props;
    return (
      <View style={styles.tabBox}>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {TabList.toJS().map((item, index) => (
              <TouchableOpacity 
                key={index} 
                style={[
                  styles.tabItem, 
                  curTabIndex === index ? styles.curTab : undefined
                ]}
                onPress={() => {
                  index !== curTabIndex && changeTab(item.value);
                }}
              >
                <Text style={ index !== curTabIndex ? styles.tabText : styles.curTabText }>
                  { item.label }
                </Text>
              </TouchableOpacity>
            ))} 
        </ScrollView>
      </View>

    )
  }
}
