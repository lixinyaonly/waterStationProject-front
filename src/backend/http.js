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
axiosIns.defaults.headers.put['X-Requested-With'] = 'XMLHttpRequest';
axiosIns.defaults.headers.delete['X-Requested-With'] = 'XMLHttpRequest';
axiosIns.defaults.responseType = 'json';
axiosIns.defaults.timeout = 5000;
axiosIns.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axiosIns.defaults.withCredentials = true;
//Axios实现请求重试
axiosIns.defaults.retry = 1; //重试次数
axiosIns.defaults.retryDelay = 1000; //重试延时
axiosIns.defaults.shouldRetry = (error) => true; //重试条件，默认只要是错误都需要重试
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
    api[method] = function (uri, data, config) {
        return new Promise(function (resolve, reject) {
            axiosIns[method](uri, data, config).then((response)=> {
                resolve(response.data);
            }).catch((response)=> {

            })
        })
    }
});

export default api
