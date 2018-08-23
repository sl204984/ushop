import React, { Component } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { modalBg, baseColor, gray } from '../common-styles';
// 数据
import { Proviences } from './proviences';
import { Cities } from './cities';
import { Areas } from './areas';
// 
import TabItem from './tab-item';

export default class CitySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      router: [{
        index: 0,
        name: '省份'
      }, {
        index: 1,
        name: '城市'
      }, {
        index: 2,
        name: '区域'
      }],
      maxIndex: 0,
      provience: {},
      city: {},
      area: {}
    };
  }

  render() {
    const { 
      index, 
      router,
      maxIndex, 
      provience, 
      city, 
      area 
    } = this.state;
    const { headerTitle, showCitySelect, onOk, onCancel } = this.props;
    const proviencesList = Proviences.toJS();
    const citiesList = Cities.toJS().filter(item => item.provinceCode === provience.code) || [];
    const AreasList = Areas.toJS().filter(item => item.cityCode === city.code) || [];

    let curTab;
    if(index === 0) {
      curTab = <TabItem tabLabel="省份" selectedCode={provience.code} onSelect={selected => {
        this.setState({provience: selected, city: {}, area: {}, index: 1, maxIndex: 1});
      }} data={this.sortByFirstWord(proviencesList, 'name')} />
    } else if (index === 1) {
      curTab = <TabItem tabLabel="城市" selectedCode={city.code} onSelect={selected => {
        this.setState({city: selected, area: {}, index: 2, maxIndex: 2});
      }} data={this.sortByFirstWord(citiesList, 'name')} />
    } else if (index === 2) {
      curTab = <TabItem tabLabel="区域" selectedCode={area.code} onSelect={selected => {
        this.setState({area: selected});
        typeof onOk === 'function' && onOk(provience.name + city.name + selected.name );
      }} data={this.sortByFirstWord(AreasList, 'name')} />
    }
    
    return <Modal animationType="slide" transparent={true} visible={showCitySelect}>
    
      <View style={styles.modal}>
        <View style={styles.headerBox}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{
              headerTitle || '选择城市和地区'
            }</Text>
          </View>
          <TouchableOpacity style={styles.closeBtn} onPress={() => {
            typeof onCancel === 'function' && onCancel();
          }}>
            <Text style={styles.closeBtnText}>&times;</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tabHeader}>
          {
            router.map(item => <TouchableOpacity onPress={() => {
              item.index <= maxIndex && 
                this.setState({index: item.index});
            }} key={item.index}>
                <Text style={index !== item.index ? styles.tabHeaderText : styles.tabHeaderTextSelected } >
                  {item.name}
                </Text>
              </TouchableOpacity>)
          }
        </View>

        {curTab}

      </View>
    </Modal>
  }

  sortByFirstWord(dataList, key) {
    if(!dataList || dataList.length === 0) {
      return [];
    }
    return dataList.sort((a, b) => a.name.localeCompare(b.name, 'zh-Hans-CN', {sensitivity: 'accent'}))
  }
}

const styles = StyleSheet.create({
  modal: Object.assign(modalBg.toJS(), {
    paddingTop: 80
  }),
  headerBox: {
    width: '100%',
    backgroundColor: 'white',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeBtn: {
    width: 20,
    height: 20, 
    borderRadius: 8,
    backgroundColor: gray,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  closeBtnText: {
    color: 'white'
  },
  tabHeader: {
    flexDirection: 'row',
    backgroundColor: '#eeeeee',
    height: 40,
    width: '100%',
    alignItems: 'center',
    paddingLeft: 10,
  },
  tabHeaderText: {
    marginLeft: 20,
    marginRight: 30,
  },
  tabHeaderTextSelected: {
    color: baseColor,
    marginLeft: 20,
    marginRight: 30,
  }
});
