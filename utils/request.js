/*
 * @Author: XueYu 😊
 * @Date: 2019-02-22 15:59:36
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-02-26 18:33:14
 */
import fetch from 'isomorphic-unfetch'

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
/* http 状态码判断 */
const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  // 错误提示处理
  //。。。。

  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
};
/* 后端code错误码判断 */
const checkCode = response => {
  const { code, message } = response
  if (!code) {
    alert(message)
    const error = new Error(message);
    error.name = response.status;
    error.response = response;
    throw error;
  }
  return response
}

export default async function request (url, options) {

  const defaultOptions = {
    method: 'GET',
    credentials: 'include',
  }

  const newOptions = { ...defaultOptions, ...options };
  if ( newOptions.method === 'POST' || newOptions.method === 'PUT' || newOptions.method === 'DELETE' ) {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      };
      newOptions.body = JSON.stringify(newOptions.body);
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers,
      };
    }
  }

  console.log('newOptions',newOptions)
  // 请求地址 拼接
  const URL = 'http://localhost:8080/api/' + String(url)

  return await fetch(URL, newOptions)
    .then(checkStatus)
    .then(response => {
      if (newOptions.method === 'DELETE' || response.status === 204) {
        return response.text();
      }
      return response.json();
    })
    .then(checkCode)
    .catch(e => {
      console.log('error ----> ',e)
      const status = e.name;
      if (status === 401) {
        //登出
        return;
      }
      // environment should not be used
      if (status === 403) {
        // router.push('/exception/403');
        return;
      }
      if (status <= 504 && status >= 500) {
        // router.push('/exception/500');
        return;
      }
      if (status >= 404 && status < 422) {
        // router.push('/exception/404');
      }
    })
}