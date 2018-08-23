import React, { Component } from "react";
import { View, FlatList, ActivityIndicator, Text, Image } from 'react-native';
import { connect } from 'react-redux'; // 引入connect函数

import ShopItem from '../utils/shop-item';
// import Header from './header';
import SearchBox from './search-box';

import { homePageActions } from '../../actions';

import { indexStyles as styles } from './styles';

class HomePage extends Component {
  state = {
    refreshing: false,
    loadingStatus: false,
    pageNum: 0,
    pageSize: 10,
  }

  componentDidMount() {
    this._initDataList();
  }

  render() {
    const { data = [], navigation, end } = this.props;
    const { refreshing } = this.state;
    return (
      <View style={styles.container}>

        <SearchBox navigation={navigation} />
        
        <FlatList 
          data={data} 
          ListEmptyComponent={this._renderEmpty}
          // ListHeaderComponent={this._renderHeader}
          renderItem={this._renderItem}
          ListFooterComponent={this._renderFooter}
          onRefresh={this._initDataList}
          refreshing={refreshing}
          onEndReached={data.length < 100 && !end && this._addDataList}
          // onEndReachedThreshold={0.1}
        />
      </View>
    )
  }

  _renderItem = ({ item }) => (
    <ShopItem 
      avatar={item.avatar} 
      publisher={item.publisher} 
      imgList={item.imgList}
      point={item.point} 
      location={item.location || ''} 
      desc={item.desc}
      vipType={item.vipType}
      onPress={() => {
        const { navigation } = this.props;
        navigation.navigate('SellerShop', {
          shopInfo: item
        });
      }}
    />
  )

  _renderEmpty = () => {
    const { refreshing } = this.state;
    if(refreshing) return null;
    return (
      <View style={styles.emptyBox}>
        <Text style={styles.textGray}>一个商家也没有~</Text>
        <Image source={require('../local-imgs/no-merchant.png')} />
      </View>
    )
  }

  _renderHeader = () => {
    const { refreshing, loadingStatus } = this.state;
    if(refreshing || loadingStatus) return null;
    return (
      <View />
    )
  }

  _renderFooter = () => {
    const { data = [] } = this.props;
    const { refreshing, loadingStatus } = this.state;
    if(refreshing || data.length === 0) return null;
    if(loadingStatus) { // 加载等待页
      return (
        <View style={styles.loadingBox}>
          <ActivityIndicator animating={true} />
        </View>
      )
    }
    return (
      <View style={styles.footerBox}>
        <View style={styles.footerMidLine} />
        <Text style={styles.footerText}>其实我也是有底线的</Text>
        <View style={styles.footerMidLine} />
      </View>
    )
  }

  _initDataList = async () => {
    const { initDataList } = this.props;
    const { refreshing, pageSize } = this.state;
    if(refreshing) return;
    this.setState({ refreshing: true });
    await initDataList({ pageSize, pageNum: 0 });
    this.setState({ refreshing: false, pageNum: 1 });
  }

  _addDataList = async () => {
    const { addDataList } = this.props;
    const { loadingStatus, pageSize, pageNum } = this.state;
    if(loadingStatus) return;
    this.setState({ loadingStatus: true });
    await addDataList({ pageSize, pageNum });
    this.setState({ loadingStatus: false, pageNum: pageNum + 1 });
  }
}

export default connect(
  (state) => ({
    data: state.shoppingMallReducer.data,
    end: state.shoppingMallReducer.end,
  }),
  dispatch => ({
    initDataList: params => dispatch(homePageActions.initDataList(params)),
    addDataList: params => dispatch(homePageActions.addDataList(params)),
  })
)(HomePage);
