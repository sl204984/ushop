import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Footer from './footer';
import ImageSwiper from './swiper';
import PublishInfo from './publish-info';
import Price from './price';
import Desc from './desc';
import Recommend from './recommend';

export default class GoodsDetail extends Component {
  render() {
    const { navigation } = this.props;
    const _goodsDetail = navigation.getParam('goodsDetail');

    return (
      <View style={styles.container}>
        <ScrollView >
          <ImageSwiper 
            imgList={_goodsDetail.imgList}
          />
          <PublishInfo
            publisher={_goodsDetail.publisher} 
            avatar={_goodsDetail.avatar}
            location={_goodsDetail.location}
            point={_goodsDetail.point}
          />
          <Price price={_goodsDetail.price} shipFee={_goodsDetail.shipFee} />
          <Desc 
            shoppingName={_goodsDetail.shoppingName}
            desc={_goodsDetail.desc}
          />
          <Recommend 
            navigation={navigation} 
          />
        </ScrollView>
        <Footer 
          navigation={navigation} 
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1
  }
})