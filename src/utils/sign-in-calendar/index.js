/**
 * 签到组件
 */ 
import React, {
  Component
} from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { CreateDate } from '../common-js';
import { textGrayColor, baseColor } from '../common-styles';

export default class SignInCalendar extends Component {
  constructor(props) {
    super(props);
    const _today = new Date();
    this.year = _today.getFullYear();
    this.month = _today.getMonth();
    this.date = _today.getDate();
    this.monthArr = [];
    const monthLen = 2;
    for(let i = 0; i < monthLen; i ++) {
      this.monthArr.unshift(CreateDate(this.year, this.month - i));
    }
    this.state = {
      index: this.monthArr.length - 1, // 月份的索引，默认选中当月
    };
  }

  render() {
    const { onSelect } = this.props; // 选中时触发的方法
    const { index } = this.state; // 当前索引
    const weekArr = this.monthArr[index]; // 一个月中每一周的数组
    const { curMonth, curYear } = this.createMonthAndYear(); // 计算当前年和月
    return <View style={styles.container}>
      {/*头部*/}
      <View style={styles.header}>
        <TouchableOpacity style={styles.btn} onPress={() => {
          this.setState({index: index - 1});
        }}>
          { index > 0 && <Text style={styles.btnText}>上个月</Text> }
        </TouchableOpacity>
        <View style={styles.yearMonth}>
          <Text style={styles.yearMonthText}>
            {curYear + '年' + ( curMonth + 1 ) + '月'}
          </Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => {
          this.setState({index: index + 1});
        }}>
          { index < (this.monthArr.length - 1) && <Text style={styles.btnText}>下个月</Text> }
        </TouchableOpacity>
      </View>

      {/*周日到周六*/}
      <View  style={styles.week}>
        {
          aWeek.map((item, index) => <View key={index} style={styles.day}>
            <Text style={styles.textGray}>{item.label}</Text>
          </View>)
        }
      </View>
      {/*周日到周六*/}
      {
        weekArr.map((week, weekIndex) => {
          // 一周
          return <View key={weekIndex} style={styles.week}>
            {
              // 一周中的每一天
              week.map((day, dayIndex) => {
                return <TouchableOpacity key={dayIndex} style={styles.day} onPress={() => {
                  typeof onSelect === 'function' && onSelect();
                }}>
                  <Text style={day.getMonth() !== curMonth && styles.textGray}>
                    {day.getDate()}
                  </Text>
                  <View style={day.getDate() % 2 === 0 ?styles.transpanrentDot : styles.dotted} />
                </TouchableOpacity>
              })
            }
          </View>
        })
      }
    </View>
  }

  createMonthAndYear() {
    const { index } = this.state;
    let _curMonth = this.month - ( this.monthArr.length - 1 ) + index;
    let _curYear = _curMonth >= 0 ? this.year : this.year - 1;
    _curMonth = _curMonth >= 0 ? _curMonth : ( _curMonth + 12 );
    return { curMonth: _curMonth, curYear: _curYear }
  }

}

const aWeek = [
  { label: '日', value: 0 },
  { label: '一', value: 1 },
  { label: '二', value: 2 },
  { label: '三', value: 3 },
  { label: '四', value: 4 },
  { label: '五', value: 5 },
  { label: '六', value: 6 }
];

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  yearMonth: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  yearMonthText: {
    fontSize: 20,
    color: baseColor
  },
  btn: {
    width: 70,
    alignItems: 'center'
  },
  week: {
    width: '100%',
    flexDirection: 'row',
  },
  day: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textGray: {
    color: textGrayColor
  },
  dotted: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: baseColor,
    marginTop: 3,
  },
  transpanrentDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 3,
  }
});