import { FetchRequest, UploadQiniuFile } from '../../src/utils/fetch';

export const fetchQiniuToken = body => {
  return FetchRequest({
    url: 'upload/qiniu/shopping', 
    method: 'POST', 
    body
  });
}

/**
 * 图片上传
 */
export const uploadImages = body => {
  return UploadQiniuFile({
    body
  })
};

export const uploadShoppingInfo = body => {
  return FetchRequest({
    url: 'upload/shopping',
    method: 'POST',
    body
  })
}