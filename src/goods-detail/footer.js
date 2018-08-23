import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-root-toast';
import { darkGray, footerHeight, white, colorhot } from '../utils/common-styles';

const { width } = Dimensions.get('window');
const IconSize = 18;
export default class Footer extends Component {
  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.iconTextContainer}>
          <TouchableOpacity style={styles.iconTextBox} onPress={this._comment}>
            <Icon name="comments-o" size={IconSize} color={darkGray} />
            <Text style={styles.iconTextText}>聊聊</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconTextBox} onPress={this._collect}>
            <Icon name="star-o" size={IconSize} color={darkGray} />
            <Text style={styles.iconTextText}>收藏</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buyNowButtonText}>立即购买</Text>
        </TouchableOpacity>

      </View>
    )
  }

  _comment = () => {
    // Chat
    const { navigation } = this.props;
    navigation.navigate('Chat');
  }

  _collect = () => {
    Toast.show('已加入收藏', {
      position: Toast.positions.CENTER
    });
  }

}

const styles = StyleSheet.create({
  container: {
    width,
    paddingLeft: 10,
    paddingRight: 10,
    height: footerHeight,
    backgroundColor: white,
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconTextContainer: {
    flexDirection: 'row',
    flex: 1
  },
  iconTextBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 42
  },
  iconTextText: {
    color: darkGray,
    marginTop: 5,
    fontSize: 11
  },
  buyNowButton: {
    backgroundColor: colorhot,
    width: 100,
    height: footerHeight - 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: (footerHeight - 10) / 2,
  },
  icons: {},
  buyNowButtonText: {
    color: white,
    fontWeight: 'bold'
  }
});