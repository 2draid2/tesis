/*"use strict";

import Vue from 'vue';
import axios from "axios";

Vue.use(axios),
// Full config:  https://github.com/axios/axios#request-config
 //axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
 //axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
 //axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
   baseURL: process.env.baseURL || process.env.apiUrl || "127.0.0.1:4000",
   timeout: 60 * 1000, // Timeout
   withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;*/
//import Vue from 'vue'

import axios from 'axios'

//Vue.use(axios);


const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
const axiosInstance = axios.create({
    timeout: 3600000,
    baseURL: process.env.URL_BACK,
    baseURL: 'http://192.168.42.129:4000/api/farmacias',
    headers
})

axiosInstance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  

export {
    axiosInstance,
  }