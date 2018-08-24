import React, { Component } from 'react';
import {
  ScrollView, 
  View, 
  StyleSheet, 
  Text, 
  TouchableOpacity,
  Alert
} from 'react-native';
import Toast from 'react-native-root-toast';

import { 
  container, 
  longConfirmBtn, 
  submitTextColor, 
} from "../utils/common-styles";
import { StorageKeys, Storage } from '../utils/local-store';

import HeaderTitle from './header-title';
import Detail from './detail';
import ImgsDemo from './imgs-demo';
import Price from './price';
import Count from './count';
import Store from './store';
import Classification from './classification';
import Location from './location';
import LocationDetail from './location-detail';

import { fetchQiniuToken, uploadImages, uploadShoppingInfo } from './api';

import { maxFiles } from './constant';


export default class PublishDemo extends Component {
  state = {
    shoppingName: '',
    userInfo: {},
    shoppingId: '',
    price: '',
    shipFee: '', // 邮费
    count: '',
    store: '',
    description: '',
    imgList: [],
    location: '',
    locationDetail: '',
    type: 1
  }

  componentDidMount() {
    this._loadUserInfo();
  }

  render() {
    const {
      shoppingName,
      userInfo,
      description,
      imgList,
      price,
      shipFee,
      count,
      store,
      type,
      location,
      locationDetail
    } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <HeaderTitle 
            value={shoppingName}
            changeValue={val => this.setState({ shoppingName: val })}
          />

          <Detail
            value={description}
            changeValue={val => {
              this.setState({ description: val });
            }} />

          <ImgsDemo 
            imgList={imgList} 
            changeImgs={imgList => this.setState({ imgList })} 
          />

          <Price 
            price={price} 
            shipFee={shipFee}
            changePrice={({ price, shipFee }) => this.setState({ 
              price, shipFee 
            })} 
          />

          <Count
            count={count}
            changeCount={({ count }) => this.setState({ count })} 
          />

          <Classification
            value={type} 
            changeType={({ type }) => this.setState({ type })} 
          />

          <Store 
            store={store} 
            changeStore={({ store }) => this.setState({ store })}
          />

          <Location 
            location={location} 
            changeVal={val => this.setState({ location: val })}
          />

          <LocationDetail 
            value={locationDetail} 
            changeValue={val => this.setState({ locationDetail: val })} />

          <TouchableOpacity style={styles.loginBox} onPress={this._upload}>
            <Text style={styles.loginText}>确定发布</Text>
          </TouchableOpacity>

          {
            !userInfo.userId ? 
              <TouchableOpacity style={styles.mask} onPress={this._loadUserInfo} /> : 
              null
          }
        </View>
      </ScrollView>
    )
  }

  _init = () => {
    this.setState({
      shoppingName: '',
      userInfo: {},
      shoppingId: '',
      price: '',
      shipFee: '', // 邮费
      count: '',
      store: '',
      description: '',
      imgList: [],
      location: '',
      locationDetail: '',
      type: 1
    });
  }

  _loadUserInfo = async () => {
    try {
      const res = await Storage.load({
        key: StorageKeys.userInfo,
        autoSync: true,
        syncInBackground: true
      });
      this.setState({ userInfo: res });
    } catch(err) {
      Alert.alert(
        '登录提醒',
        '您尚未登录，是否现在登录？',
        [{
          text: '取消', onPress: () => {}, 
          style: 'cancel'
        }, {
          text: '确定', onPress: () => {
            this.props.navigation.navigate('Login');
          }
        }],
      );
    }
  }

  _upload =  async () => {
    const { 
      imgList, 
      shoppingId: _shoppingId, 
      userInfo, 
      shoppingName,
      price,
      type,
      count,
      store,
      description,
      location,
      locationDetail,
      shipFee = 0
    } = this.state;
    // 校验
    if(!shoppingName) {
      Toast.show('请输入商品名称~', {
        position: Toast.positions.CENTER
      });
      return;
    }
    if(!price) {
      Toast.show('请输入商品价格~', {
        position: Toast.positions.CENTER
      });
      return;
    }
    if(!type) {
      Toast.show('请选择商品分类~', {
        position: Toast.positions.CENTER
      });
      return;
    }
    if(!count) {
      Toast.show('请输入商品数量~', {
        position: Toast.positions.CENTER
      });
      return;
    }
    if(!store) {
      Toast.show('请输入商品剩余数量~', {
        position: Toast.positions.CENTER
      });
      return;
    }
    if(store < count || store % count !== 0) {
      Toast.show('商品剩余数量必须为商品数量的整数倍！', {
        position: Toast.positions.CENTER
      });
      return;
    }


    if(!location || !locationDetail) {
      Toast.show('请完善发布地点信息~', {
        position: Toast.positions.CENTER
      });
      return;
    }

    if (imgList.length === 0) {
      Toast.show('请选择商品图片~', {
        position: Toast.positions.CENTER
      });
      return;
    } else if (imgList.length > maxFiles) {
      Toast.show(`最多可上传${maxFiles}张图片`, {
        position: Toast.positions.CENTER
      });
      return;
    }
    // 覆盖上传
    const sourceKeys = imgList.map((item, index) => {
      const imgType = item.uri && item.uri.split('/')[1];
      return index + '.' + (imgType || 'jpeg');
    });
    // 获取token
    const { res: qiniuRes } = await fetchQiniuToken({
      suffArr: sourceKeys,
      userId: '',
      shoppingId: _shoppingId
    });
    const { shoppingId, tokenArr } = qiniuRes;
    await this.setState({ shoppingId });
    // 上传到7牛
    for(let i = 0; i < tokenArr.length; i++) {
      const item = imgList[i];
      const file = {
        key: tokenArr[i].key,
        token: tokenArr[i].token,
        file: { 
          uri: item.uri,
          type: 'multipart/form-data'
        },
        'x:shoppingId': shoppingId
      };
      const { err } = await uploadImages(file);
      if(err) {
        Toast.show('图片上传失败，请重新上传~', {
          position: Toast.positions.CENTER
        });
        return;
      }
    }
    const now = new Date();

    // 上传到用户服务器
    const { err: shoppingErr } = await uploadShoppingInfo({
      shoppingId,
      userId: userInfo.userId,
      shoppingName,
      price,
      type,
      count,
      store,
      description,
      location,
      locationDetail,
      shipFee,
      publishDate: `${now.getFullYear()}-${now.getMonth() + 1}=${now.getDate()}`
    });
    if(shoppingErr) {
      Toast.show(shoppingErr, {
        position: Toast.positions.CENTER
      });
    } else {
      Toast.show('上传成功~', {
        position: Toast.positions.CENTER
      });
      this._init();
    }
  }

}

const styles = StyleSheet.create({
  container: Object.assign(container.toJS(), {
    position: 'relative'
  }),
  loginBox: longConfirmBtn.toJS(),
  loginText: {
    color: submitTextColor
  },
  mask: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0
  }
});