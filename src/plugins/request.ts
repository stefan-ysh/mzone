import axios from "axios";
// import cookieService from "tools/cookie";
import { ElMessage } from "element-plus";
import { settings } from "config/index";

axios.defaults.withCredentials = true;
// 请求超时时间60s
axios.defaults.timeout = 1 * 60 * 1000;
// get请求头
axios.defaults.headers.get["Content-Type"] = "application/json";
// post请求头
axios.defaults.headers.post["Content-Type"] = "application/json";
// 根请求路径
axios.defaults.baseURL = settings.baseUrl;

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    // 增加接口时间戳
    config.params = { ...config.params };
    // config.headers = { "x-csrf-token": "xxx" };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
let timer: any = false;
axios.interceptors.response.use(
  (response) => {
    // cookieService.set("xxx", response.headers["csrftoken"]);
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    if (error.response && error.response.status) {
      const path = window.location.href;
      switch (error.response.status) {
        case 302:
          window.location.href = "" + path;
          break;
        case 401:
          window.location.href = "" + path;
          break;
        case 403:
          // 清除token
          if (!timer) {
            timer = setTimeout(() => {
              ElMessage({
                message: "登录信息已过期,请重新登录！",
                type: "error",
              });
              setTimeout(() => {
                window.location.href = "xxx" + path;
                cookieService.set("loginCookie", false, 1);
              }, 2000);
            }, 0);
          }
          break;
        // 404请求不存在
        case 404:
          ElMessage({
            message: "请求不存在",
            type: "error",
          });
          break;
        case 500:
          ElMessage({
            message: error.response.statusText,
            type: "error",
          });
          break;
        default:
          ElMessage({
            message: error.response.data.message,
            type: "error",
          });
      }
      return Promise.reject(error.response);
    }
  }
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url: string, params: any) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: params })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url: string, params: any) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

export default axios;
