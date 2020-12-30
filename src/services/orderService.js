import { request } from './request';

export const orderService = {
  baseUrl: 'https://my-burger-83da3.firebaseio.com',

  order(url, data) {
    return request.post(this.baseUrl + url, data);
  },

  getOrders(url) {
    return request.get(this.baseUrl + url);
  },
};
