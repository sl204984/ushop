import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Dimensions, 
  TouchableOpacity, 
  Platform, 
  BackHandler 
} from 'react-native';
import { white, lightGray, gray } from '../common-styles';
import BaseModal from './modal-base';

const { width } = Dimensions.get('window');

export default class Popup extends Component {
  
  componentDidMount() {
    const { onCancel } = this.props;
    if(Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', () => {
        onCancel();
      });
    }
  }

  componentWillUnmount() {
    const { onCancel } = this.props;
    if(Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', () => {
        onCancel();
      });
    }
  }

  render() {
    const { visible, children, onCancel, title } = this.props;
    return (
      <BaseModal visible={visible} onRequestClose={onCancel}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.dismiss} />

            <View style={styles.headerTextBox}>
              <Text style={styles.headerText}>{title || "头部"}</Text>
            </View>
            
            <TouchableOpacity style={styles.dismiss} onPress={onCancel}>
              <Text style={styles.dismissText}>取消</Text>
            </TouchableOpacity>
          </View>
          { children }
        </View>
      </BaseModal>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    width,
    height: 400,
    backgroundColor: white,
    alignSelf: 'flex-end',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  header: {
    width,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: lightGray
  },
  dismiss: {
    width: 40
  },
  dismissText: {
    color: gray
  },
  headerTextBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 15
  }
})