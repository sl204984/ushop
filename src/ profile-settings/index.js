/**
 * 个人资料设置
 * */ 
import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';

import CommonSettings from './common-settings';

export default class ProfileSettings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return <ScrollView>
      <CommonSettings />
    </ScrollView>
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%"
  }
});
