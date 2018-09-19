// import axios from 'axios';
// // axios 配置
// axios.defaults.timeout = 5000;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.withCredentials = true;
// //Axios实现请求重试
// axios.defaults.retry = 1; //重试次数
// axios.defaults.retryDelay = 1000; //重试延时
// axios.defaults.shouldRetry = (error) => true; //重试条件，默认只要是错误都需要重试
// //http request 封装请求头拦截器
// axios.interceptors.request.use(config => {
//     // console.log('request',config)
//   //请求方式
//   let method = config.method.toLowerCase();
//   return config;
// }, error => {
//   return Promise.reject(err);
// });

// //http response 封装后台返回拦截器
// axios.interceptors.response.use(response => {
// //当返回信息为未登录或者登录失效的时候重定向为登录页面
//   //   if (response.data.code == 'W_100004' || response.data.message == '用户未登录或登录超时，请登录！') {
//   //     router.push({
//   //       path: "/",
//   //       querry: {
//   //         redirect: router.currentRoute.fullPath
//   //       } //从哪个页面跳转
//   //     })
//   //   }
//   if (typeof response.data === 'string') {
//     return JSON.parse(response.data);
//   } else {
//     return response;
//   }
// }, error => {
//   return Promise.reject(error)
// });

// const get = (url, params = {}) => new Promise((resolve, reject) => {
//     axios.get(url, {
//       params: params
//     }).then(response => {
//         console.log(response.data)
//       resolve(response.data);
//     }).catch(err => {
//       reject(err);
//     })
//   });

// const post = (url, data = {}) => new Promise((resolve, reject) => {
//     axios.post(url, data).then(response => {
//       resolve(response.data);
//     }).catch(err => {
//       reject(err);
//     })
//   });

/* 封装get方法*/
// export function get(url, params = {}) {
//   return new Promise((resolve, reject) => {
//     axios.get(url, {
//       params: params
//     }).then(response => {
//         console.log(response.data)
//       resolve(response.data);
//     }).catch(err => {
//       reject(err);
//     })
//   })
// }

/* 封装post方法 */
// export function post(url, data = {}) {
//   return new Promise((resolve, reject) => {
//     axios.post(url, data).then(response => {
//       resolve(response.data);
//     }).catch(err => {
//       reject(err);
//     })
//   })
// }

import axios from 'axios'
import qs from 'qs'
let axiosIns = axios.create({});

if (process.env.NODE_ENV == 'development') {
    axiosIns.defaults.baseURL = '';
} else if (process.env.NODE_ENV == 'debug') {
    axiosIns.defaults.baseURL = '';
} else if (process.env.NODE_ENV == 'production') {
    axiosIns.defaults.baseURL = '';
}

axiosIns.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
axiosIns.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';
axiosIns.defaults.responseType = 'json';
axiosIns.defaults.transformRequest = [function (data) {
    //数据序列化
    return qs.stringify(data);
}
];
axiosIns.defaults.validateStatus = function (status) {
    return true;
};
axiosIns.interceptors.request.use(function (config) {
    //配置config
    config.headers.Accept = 'application/json';
    // config.headers.System = 'vue';
    // let token = Vue.localStorage.get('token');
    // if(token){
    //     config.headers.Token = token;
    // }
    return config;
});
axiosIns.interceptors.response.use(function (response) {
    let data = response.data;
    let status = response.status;
    if (status === 200) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(response);
    }
});

let ajaxMethod = ['get', 'post','put','delete'];
let api = {};
ajaxMethod.forEach((method)=> {
    //数组取值的两种方式
    api[method] = function (uri, data, config) {
        return new Promise(function (resolve, reject) {
            axiosIns[method](uri, data, config).then((response)=> {
                /*根据后台数据进行处理
                 *1 code===200   正常数据+错误数据     code!==200   网络异常等
                 *2 code===200   正常数据     code!==200   错误数据+网络异常等
                 * 这里使用的是第一种方式
                 * ......
                 */
                if (response.data.StatusCode) {
                    //toast封装：  参考ele-mint-ui
                    Toast({
                        message: response.data.Message,
                        position: 'top',
                        duration: 2000
                    });
                    if (response.data.Message === '未登录') {
                        Toast({
                            message: response.data.Message,
                            position: '',
                            duration: 2000
                        });
                        //使用vue实例做出对应行为  change state or router
                        //instance.$store.commit('isLoginShow',true);
                    }
                } else {
                    resolve(response);
                }
            }).catch((response)=> {
                //reject response
                //alert('xiuxiu，限你10分钟到我面前来,不然...');
            })
        })
    }
});

console.log('api',api)
export default api
