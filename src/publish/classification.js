import React, { Component } from 'react';
import { TouchableOpacity, Text, View, ScrollView } from 'react-native';

import { rowStyles as styles } from './styles';
import { gray } from '../utils/common-styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TabList } from '../utils/constant';
import { Popup } from '../utils/modal';
import CheckBox from '../utils/check-box';

export default class Classification extends Component {

  state = {
    visible: false
  }

  render() {
    const { value } = this.props;
    const { visible } = this.state;
    const classifyName = this._selectedTabName() || '';
    return (
      <TouchableOpacity style={styles.row} onPress={() => this.setState({
        visible: true
      })}>
        <Text>分类</Text>
        <View style={styles.iconText}>
          <Text style={styles.iconTextValue}>
            { classifyName }
          </Text>
          <Icon name="angle-right" size={20} style={styles.sufIcon} color={gray} />
        </View>

        <Popup 
          visible={visible}
          title="请选择分类" 
          onCancel={() => this.setState({
            visible: false
          })}
        >
          <ScrollView contentContainerStyle={styles.contentContainer}>
            {TabList.delete(0).map((item, index) => (
              <View style={styles.dialogRow} key={'tab-list-' + index}>
                <View style={styles.tabList}>
                  <Text>{ item.get('label') }</Text>
                  <CheckBox 
                    value={ item.get('value') === value }
                    onValueChange={() => {
                      this._changeType(item.get('value'));
                    }}
                  />
                </View>
              </View>
            )).toArray()}
            
          </ScrollView>
        </Popup>
      </TouchableOpacity>
    )
  }

  _selectedTabName = () => {
    const { value } = this.props;
    const _tabList = TabList.toJS();
    for(let item of _tabList) {
      if(item.value === value) {
        return item.label;
      }
    }
  }

  _changeType = async (val) => {
    const { changeType, value } = this.props;
    if(val !== value) {
      typeof changeType === 'function' && 
        await changeType({ type: val });
    }
    this.setState({ visible: false });
  }
}
