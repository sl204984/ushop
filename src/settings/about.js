import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { narrowRow, textGrayColor, white } from '../utils/common-styles';
import CONFIG from '../utils/config';

const IconPrefix = `${CONFIG.IMG_HOST}static/icons/`;
const IconMore = `${IconPrefix}more.png`;

export default class About extends Component {
  constructor(props) {
    super(props);
    const { navigate } = this.props;
    this.featureList = [{
      label: '个人资料设置',
      onPress() {
        navigate('ProfileSettings')
      }
    }, {
      label: '关于有售',
      onPress() {}
    }, {
      label: '分享给朋友',
      onPress() {}
    }]
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.featureList.map((item, index) => {
            return <TouchableOpacity key={index} style={styles.row} onPress={() => {
              typeof item.onPress === "function" && item.onPress()
            }}>
              <Text>{ item.label }</Text>
              <Image source={{uri: IconMore}} style={styles.imageMore} />
            </TouchableOpacity>
          })
        }
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
  count: {
    color: textGrayColor
  },
  imageMore: {
    width: 15,
    height: 15,
    marginLeft: 15,
  }
  
});
