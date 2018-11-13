import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-burger-83da3.firebaseio.com/"
});

export default instance;
