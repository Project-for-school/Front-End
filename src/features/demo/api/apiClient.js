import axios from "axios";
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_DEV,
  headers: {
    "content-type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (err) => {
    throw err;
  }
);

export default axiosClient;
