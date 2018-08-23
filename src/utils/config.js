let CONFIG;
const version = '0.0.1';
const HTTP_TIME_OUT = 5;
const qiniuHost = 'https://upload.qiniup.com'; // 华东地区
if (__DEV__) {
  CONFIG = {
    HOST: "http://47.99.72.101/",
    // IMG_HOST: "http://localhost:3000/static/",
    IMG_HOST: "http://pdj5rz8bv.bkt.clouddn.com/",
    HTTP_TIME_OUT,
    version,
    qiniuHost
  }
} else {
  CONFIG = {
    HOST: "http://47.99.72.101/",
    IMG_HOST: "http://pdj5rz8bv.bkt.clouddn.com/",
    HTTP_TIME_OUT,
    version,
    qiniuHost
  }
}

export default CONFIG;