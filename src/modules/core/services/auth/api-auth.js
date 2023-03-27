import axios from "@/axios-config";

const AuthService = {
  async login(username, password) {
    try {
      const response = await axios.post("/auth/signin", { username, password });
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

// function handleApiResponse(requestFn: () => {}) {
//     try {
//       const { data } = await requestFn();
//       response.content = data;
//     } catch (e) {
//       response.error = remoteError(e);
//     }

//     return response;
//   }

export default AuthService;
