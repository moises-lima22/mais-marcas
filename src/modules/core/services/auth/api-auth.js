import axios from "@/modules/axios/axios-config";

const AuthService = {
  async login(username, password) {
    const _accessToken = localStorage.getItem("accessToken");

    if (_accessToken) {
      this.logout();
    }

    try {
      const response = await axios.post(
        "/auth/signin",
        {
          username,
          password,
        },
        {
          headers: {
            Authorization: null,
          },
        }
      );

      localStorage.setItem("accessToken", response.data.accessToken);

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.accessToken}`;

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  logout() {
    localStorage.removeItem("accessToken");
    delete axios.defaults.headers.common["Authorization"];
  },
};

export default AuthService;
