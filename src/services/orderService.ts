import { request } from './request';

export const orderService = {
  baseUrl: 'https://my-burger-83da3.firebaseio.com',

  order(url: string, data: any): any {
    return request.post(this.baseUrl + url, data);
  },

  getOrders(url: string): any {
    return request.get(this.baseUrl + url);
  },
};
