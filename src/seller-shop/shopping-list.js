import React, { Component } from 'react';
import { FlatList } from 'react-native';

export default class ShoppingList extends Component {
  render() {
    return (
      <FlatList 
        renderItem={this._renderItem}
      />
    )
  }
}