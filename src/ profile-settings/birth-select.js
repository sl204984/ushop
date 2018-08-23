import React, { Component } from 'react';

import DateTimePicker from 'react-native-modal-datetime-picker';

export default class BirthSelect extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { showBirthSelect, selectBirth } = this.props;
    return <DateTimePicker
      cancelTextIOS="取消"
      confirmTextIOS="确定"
      titleIOS="请选择生日"	
      isVisible={showBirthSelect}
      onConfirm={(date) => {
        const Year = date.getFullYear();
        const Month = date.getMonth() + 1;
        const Day = date.getDate();
        const YMD = Year + '-' + (Month > 10 ? Month : '0' + Month) + '-' + (Day > 10 ? Day : '0' + Day);
        selectBirth(YMD);
      }}
      onCancel={() => {
        selectBirth();
      }}
    />
  }
}