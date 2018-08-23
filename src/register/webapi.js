import { FetchRequest } from '../utils/fetch';

const register = body => {
  return FetchRequest({
    url: 'register', 
    method: 'POST', 
    body
  });
}

export default {
  register
}
