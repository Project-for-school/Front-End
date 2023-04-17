import axiosClient from "./apiClient";

export const PremiumPageApi = {
  getPackage: () => {
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
