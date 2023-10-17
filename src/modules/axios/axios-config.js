import axios from "axios";

const BASE_URL = "http://localhost:8888";

axios.defaults.baseURL = BASE_URL;

const _accessToken = localStorage.getItem("accessToken");

if (_accessToken) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${_accessToken}`;
}

export default axios;
