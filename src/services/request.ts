import axios from 'axios';

export const request = {
  get(url: string, config?: { [k: string]: any }): any {
    return axios.get(url, config);
  },

  post(url: string, data: any, config?: { [k: string]: any }): any {
    return axios.post(url, data, config);
  },
};
