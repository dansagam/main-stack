import axios, { InternalAxiosRequestConfig } from 'axios';
// import Auth from './Auth';

const Api = axios.create({
  baseURL: import.meta.env.VITE_HRMS_BASE_URL || '',
});

Api.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) =>
    // if (Auth.isAuthenticated()) {
    //   config.headers.Authorization = `Bearer ${Auth.getToken()}`;
    // }
    config,
  (error) => Promise.reject(error)
);

Api.interceptors.response.use(
  (response) => {
    if (response.status === 208) {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw response;
    }
    return response;
  },
  (error) => Promise.reject(error)
);

export default Api;
