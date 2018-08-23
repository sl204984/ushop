import { FetchRequest } from '../utils/fetch';

const forgetPwd = body => {
  return FetchRequest({
    url: 'forgetPwd', 
    method: 'POST', 
    body
  });
}

export default {
  forgetPwd
}
