import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import {rowStyles as styles } from './styles';
import { gray } from '../utils/common-styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import CitySelector from '../utils/city-selector';

export default class Location extends Component {

  state = {
    showCitySelect: false
  }

  render() {
    const { location, changeVal } = this.props;
    const { showCitySelect } = this.state;
    return (
      <TouchableOpacity style={styles.row} onPress={() => {
        this.setState({ showCitySelect: true });
      }}>
        <Text>发布地点</Text>
        <View style={styles.iconText}>
          <Text style={styles.iconTextValue}>{location}</Text>
          <Icon name="angle-right" size={20} style={styles.sufIcon} color={gray} />
        </View>

        <CitySelector 
          showCitySelect={showCitySelect} 
          onOk={async area => {
            await changeVal(area);
            await this.setState({
              showCitySelect: false
            })
          }}
          onCancel={() => this.setState({ showCitySelect: false })} 
        />
      </TouchableOpacity>
    )
  }
}
