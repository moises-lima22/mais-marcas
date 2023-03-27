import axios from "axios";

// Configura a URL base da API
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

// Armazena o token JWT no localStorage
const accessToken = localStorage.getItem("accessToken");
if (accessToken) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
}

export default axios;
