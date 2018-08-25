import { FetchRequest, UploadQiniuFile } from '../../src/utils/fetch';

export const fetchQiniuToken = body => {
  return FetchRequest({
    url: 'userCenter/qiniu/avatar', 
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
