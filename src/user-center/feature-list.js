import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { narrowRow, textGrayColor, white, gray } from '../utils/common-styles';

export default class FeatureList extends Component {
  constructor(props) {
    super(props);
    const { navigate } = props;
    this.featureList = [{
      label: '我发布的',
      count: 1,
      icon: <Icon name="rocket" size={20} style={styles.preIcon} color={gray} />,
      onPress: () => {
        navigate('MyPublishList');
      }
    }, {
      label: '我卖出的',
      count: 3,
      // arrow-circle-up hand-o-up angle-double-up toggle-up
      icon: <Icon name="arrow-circle-up" size={20} style={styles.preIcon} color={gray} />,
      onPress: () => {
        navigate('MySoldList');
      }
    }, {
      label: '我买到的',
      count: 5,
      icon: <Icon name="buysellads" size={20} style={styles.preIcon} color={gray} />,
      onPress: () => {
        navigate('MyBoughtList');
      }
    }, {
      label: '我的收藏',
      count: 0,
      icon: <Icon name="star" size={20} style={styles.preIcon} color={gray}/>,
      onPress: () => {
        navigate('MyCollectionList');
      }
    }, {
      label: '我的余额',
      count:  1000000000.123,
      icon: <Icon name="money" size={20} style={styles.preIcon} color={gray} />,
      onPress: () => {
        navigate('MyBalance', {balance: 1000000000.123});
      }
    }, {
      label: '我的优惠券',
      count: 100,
      icon: <Icon name="ticket" size={20} style={styles.preIcon} color={gray} />,
      onPress: () => {
        navigate('MyDiscountCoupon')
      }
    }, {
      label: '签到',
      icon: <Icon name="pencil" size={20} style={styles.preIcon} color={gray} />,
      onPress: () => {
        navigate('SignIn')
      }
    }]
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.featureList.map((item, index) => {
            return <TouchableOpacity key={index} style={styles.row} onPress={() => {
              typeof item.onPress === 'function' && item.onPress();
            }}>
              <View style={styles.iconText}>
                { item.icon }
                <Text>{ item.label }</Text>
              </View>
              <View style={styles.iconText}>
                <Text style={styles.count}>{ item.count }</Text>
                <Icon name="angle-right" size={20} style={styles.sufIcon} color={gray} />
              </View>
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
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  preIcon: {
    marginRight: 10
  },
  sufIcon: {
    marginLeft: 10
  }
});
