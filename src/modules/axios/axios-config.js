import axios from "axios";

// Configura a URL base da API
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

export default axios;
