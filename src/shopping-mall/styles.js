import { StyleSheet, Dimensions } from 'react-native';
import { textGrayColor, paddingTop, white, lightGray, blackGray, baseColor } from '../utils/common-styles';

const { width, height } = Dimensions.get('window');
const searchBoxHeight = 56;
const headerHeight = 40;

export const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    alignItems: 'center',
    paddingTop: paddingTop,
  },
  loadingBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  emptyBox: {
    width,
    height: height - 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerBox: {
    width: '100%',
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  footerMidLine: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: textGrayColor
  },
  footerText: {
    color: textGrayColor,
    marginLeft: 20,
    marginRight: 20
  },
  textGray: {
    color: textGrayColor
  }
});

export const searchBoxStyles = StyleSheet.create({
  header: {
    width,
    height: searchBoxHeight,
    backgroundColor: white,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10
  },
  searchBacground: {
    backgroundColor: lightGray,
    height: '100%',
    width: '100%',
    borderRadius: 3
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    paddingLeft: 10
  },
  preIcon: {
    marginRight: 10,
    color: textGrayColor
  },
  searchText: {
    color: textGrayColor
  }
});

export const headerStyles = StyleSheet.create({
  headerBox: {
    width,
    height: headerHeight,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 16,
    color: blackGray
  }
});