import axiosClient from "./apiClient";

export const DemoApi = {
  getData: () => {
    const url = "/v1/premium/";
    return axiosClient.get(url);
  },
};

export const TopicsApi = {
  getData: () => {
    const url = "/v1/topic/";
    return axiosClient.get(url);
  },
};
