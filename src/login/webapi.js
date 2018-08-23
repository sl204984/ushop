import { FetchRequest } from '../utils/fetch';

const login = body => {
  return FetchRequest({
    url: 'login', 
    method: 'POST', 
    body
  });
}

export default {
  login
}
