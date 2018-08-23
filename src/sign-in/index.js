import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text } from 'react-native';

import SingInCalendar from '../utils/sign-in-calendar';
import Today from './today';
import SignInBtn from './sign-in-btn';

import { container } from '../utils/common-styles';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { goBack } = this.props.navigation;
    return <ScrollView>
      <View style={styles.contanier}>
        <Today />
        <SingInCalendar />
        <SignInBtn goBack={goBack} hasSignIn={false} />
      </View>
    </ScrollView>
  }
}

const styles = StyleSheet.create({
  contanier: container.toJS(),
});