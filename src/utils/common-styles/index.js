import { fromJS } from 'immutable';
import Platform from "Platform";

export const white = 'white';
export const red = '#ff0000';
export const yellow = '#ffff00';
export const orange = '#FFA500';
export const colorhot = red;
export const colorLigthHot = '#ff3300';
export const colorGold = yellow;
export const colorOrange = orange;
export const lightGray = '#ebebeb'; 
export const gray = '#ababab';
export const darkGray = '#6b6b6b';
export const blackGray = '#2b2b2b';
export const black = '#000';

export const baseColor = '#009797';
export const titleColor = baseColor;
export const submitColor = baseColor;
export const submitTextColor = 'white';
export const bgColor = '#ebebeb';
export const textGrayColor = gray;

export const modalOpacityColor = 'rgba(0, 0, 0, 0.5)';

export const fontBold = 'bold';

// fontsize
export const titleFont = 30;
export const textFont = 14;
export const littleFont = 12;

// padding
export const paddingTop = Platform.OS === 'android' ? 0 : 22;

// height
export const footerHeight = 48;

// styles
export const container = fromJS({
  flex: 1,
  width: '100%',
  alignItems: 'center',
  backgroundColor: 'white',
  paddingTop: paddingTop, // 距离顶部距离
});

export const loginContainer = container.merge({
  justifyContent: 'center',
  padding: 20
});

export const longConfirmBtn = fromJS({
  width: '86%',
  backgroundColor: submitColor,
  height: 42,
  borderRadius: 3,
  alignItems: 'center',
  justifyContent: 'center',
  margin: 20
});

export const row = fromJS({
  flexDirection: 'row',
  width: '90%',
  marginBottom: 20,
  borderBottomWidth: 1,
  borderBottomColor: lightGray,
  height: 40,
  alignItems: 'center'
});


export const narrowRow = fromJS(Object.assign(row.toJS(), {
  width: '100%',
  paddingLeft: 20,
  paddingRight: 20,
  marginBottom: 5,
  marginTop: 5,
  borderBottomWidth: 0,
  justifyContent: 'space-between'
}));


// 模态框
export const modalBg = fromJS({
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  backgroundColor: modalOpacityColor
});

