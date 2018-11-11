import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-df9fe.firebaseio.com/"
});

export default instance;
