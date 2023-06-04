import axios from 'axios';

export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      token.set();
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      console.log(err);
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const token = {
  set(token) {
    axios.defaults.headers.common.apikey = 'zQIn97tCUkXPH6kQ7gbfgJSFBM4zl24y';
  },
  unset() {
    axios.defaults.headers.common.apikey = '';
  },
};
