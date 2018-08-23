import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { narrowRow, textGrayColor, white, gray } from '../utils/common-styles';

import GenderSelect from './gender-select';
import BirthSelect from './birth-select';
import CitySelect from '../utils/city-selector';

export default class CommonSettings extends Component {
  constructor(props) {
    super(props);
    this.featureList = [{
      label: '头像',
      onPress: () => {}
    }, {
      label: '性别',
      value: 'gender',
      onPress: () => {
        this.setState({ showGenderSelect: true });
      }
    }, {
      label: '生日',
      value: 'birth',
      onPress: () => {
        this.setState({ showBirthSelect: true });
      }
    }, {
      label: '常住地址',
      value: 'permanetAddress',
      onPress: () => {
        this.setState({ showCitySelect: true });
      }
    }, {
      label: '收货地址',
      value: 'shippingAddress',
      onPress: () => {}
    }, {
      label: '院校名称',
      value: 'collegeName',
      onPress: () => {}
    }];

    this.state = {
      gender: '男',
      showGenderSelect: false,
      birth: '1993-10-16',
      showBirthSelect: false,
      permanetAddress: '江苏南京',
      showCitySelect: false,
      shippingAddress: '江苏南京雨花台区',
      collegeName: '东南大学'
    }
  }

  render() {
    const { showGenderSelect, showBirthSelect, showCitySelect } = this.state;
    return (
      <View style={styles.container}>
        {
          this.featureList.map((item, index) => {
            return <TouchableOpacity key={index} style={styles.row} onPress={() => {
              typeof item.onPress === 'function' && item.onPress()
            }}>
              <Text>{ item.label }</Text>
              <View style={styles.iconText}>
                <Text style={styles.value}>{ this.state[item.value] }</Text>
                <Icon name="angle-right" size={20} style={styles.sufIcon} color={gray} />
              </View>
            </TouchableOpacity>
          })
        }

        <GenderSelect selectGender={(gender) => {
          this.setState({ gender, showGenderSelect: false });
        }} showGenderSelect={showGenderSelect}/>

        <BirthSelect selectBirth={(birth) => {
          this.setState({ birth: birth || this.state.birth, showBirthSelect: false });
        }} showBirthSelect={showBirthSelect} />

        <CitySelect showCitySelect={showCitySelect} onOk={area => {
          this.setState({ permanetAddress: area, showCitySelect: false });
        }} onCancel={() => {
          this.setState({ showCitySelect: false });
        }} />

      </View>
    );
  }

}

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: white,
    marginTop: 15
  },
  row: narrowRow.toJS(),
  value: {
    color: textGrayColor
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  imageMore: {
    width: 15,
    height: 15,
    marginLeft: 15,
  }
});
