import axios from 'axios';
import { store } from '@/store';
import * as queryString from 'query-string';

const api = process.env.VUE_APP_API_URL;

const setLoading = flag => {
  store.commit('common/SET_LOADING', flag, { root: true });
};

//let {text, type} = payload
function addAlert(payload) {
  store.commit('common/' + 'ADD_ALERT', payload);
}

export class AxiosWrapper {
  static get axios() {
    return axios;
  }

  static __getPath(path) {
    return [api, path.replace(/\//, '')].join('/');
  }

  static async get(path, data, config, lock) {
    let isLock = lock;
    let configData = config;

    if (typeof config === 'boolean') {
      isLock = configData;
      configData = undefined;
    }
    if (isLock) setLoading(true);


    // console.log('get request', isLock, configData, `${this.__getPath(path)}?${queryString.stringify(data || {})}`)

    const response = axios.get(
        `${this.__getPath(path)}?${queryString.stringify(data || {})}`,
        configData
    );
    response.then(request(isLock), error(isLock));

    return response;
  }

  static async post(path, data, config, lock) {
    let isLock = lock;
    let configData = config;

    if (typeof config === 'boolean') {
      isLock = configData;
      configData = undefined;
    }
    if (isLock) setLoading(true);

    const response = axios.post(`${this.__getPath(path)}`, data, configData);
    response.then(request(isLock), error(isLock));

    return response;
  }

  static async put(path, data, config, lock) {
    let isLock = lock;
    let configData = config;

    if (typeof config === 'boolean') {
      isLock = configData;
      configData = undefined;
    }
    if (isLock) setLoading(true);

    const response = axios.put(`${this.__getPath(path)}`, data, configData);
    response.then(request(isLock), error(isLock));

    return response;
  }

  static async delete (path, data, config, lock) {
    let isLock = lock;
    let configData = config;

    if (typeof config === 'boolean') {
      isLock = configData;
      configData = undefined;
    }
    if (isLock) setLoading(true);

    const response = axios.delete(`${this.__getPath(path)}`, data, configData);
    response.then(request(isLock), error(isLock));

    return response;
  }
}

const request = function(lock) {
  return function(response) {
    if (lock) setLoading(false);
    status.handler(response.status, response);

    if (response.data.message) {
      addAlert({
        text: response.data.message,
        type: response.data.success ? 'success' : 'error'
      });
    }
  };
};

const error = function(lock) {
  return function(error) {
    if (lock) setLoading(false);
    status.handler(error.response.status, error.response);
  };
};

// const back = function() {
//   router.go(-1);
// };

const status = {
  // 500: function(response) {
  //   let message = 'Произошла ошибка на стороне сервера';
  //   addAlert({
  //     text: message,
  //     type: 'error'
  //   });
  // },
  500: (() => {
    let message = 'Произошла ошибка на стороне сервера';
    addAlert({
      text: message,
      type: 'error'
    });

  }),
  403: (response) => {
    console.log(response.data.message);
    let message = response.data.message;
    if (message) {
      addAlert({
        text: message,
        type: 'error',
      });
    }
  },
  401: (response) => {
    let message = response.data.message;
    if (message) {
      addAlert({
        text: message,
        type: 'error',
      });
    }
  },
  // default: function(response) {}
  default : (() => {})
};

status.handler = function(name = 'default') {
  let statusFunction = status[name] || status['default'];
  return statusFunction.apply(status, [].slice.call(arguments, 1));
};
