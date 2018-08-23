import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import About from './about';
import SignOut from './sign-out';

export default class Settings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return <ScrollView style={styles.container}>
      <About navigate={navigate} />
      <SignOut navigate={navigate} />
    </ScrollView>
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%"
  }
});

