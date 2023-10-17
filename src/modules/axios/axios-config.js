import axios from "axios";

// Configura a URL base da API
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

const _accessToken = localStorage.getItem("accessToken");

if (_accessToken) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${_accessToken}`;
}

export default axios;
