import { request } from './request';

export const orderService = {
  _baseUrl: 'https://my-burger-83da3.firebaseio.com',

  order(url, data) {
    return request.post(this._baseUrl + url, data);
  },

  getOrders(url) {
    return request.get(this._baseUrl + url);
  },
};
