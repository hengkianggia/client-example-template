import { useAuthStore } from "@/state/useAuthStore";
import axios, { AxiosInstance } from "axios";
import { NEXT_PUBLIC_API_BASE_URL } from "./environment";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: NEXT_PUBLIC_API_BASE_URL,
  timeout: 3000, // Increased timeout
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add response interceptor to handle 401/403 errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;

    if (response?.status === 401 || response?.status === 403) {
      // Trigger Zustand state to set isLogin to false

      useAuthStore.getState().setIsLogin(false);
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
