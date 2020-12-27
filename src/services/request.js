import axios from 'axios';

export const request = {
  get(url, config) {
    return axios.get(url, config);
  },

  post(url, data, config) {
    return axios.post(url, data, config);
  },
};
