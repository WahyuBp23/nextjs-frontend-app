import axios, { AxiosRequestConfig } from 'axios';
// import Cookies from 'js-cookie';

interface CallAPIProps extends AxiosRequestConfig {
  url?: string;
  method?: string;
  data?: FormData;
  isToken?: boolean;
  serverToken?: string;
  contentType?: string;
}

export default async function callAPI({
  url,
  method,
  data,
  isToken,
  serverToken,
  contentType,
}: CallAPIProps) {
  let headers = {};
  if (serverToken) {
    headers = {
      Authorization: `Bearer ${serverToken}`,
    };
  } else if (isToken) {
    // const tokenCookies = Cookies.get('token');
    // if (tokenCookies) {
    //   const jwtToken = atob(tokenCookies);
    //   headers = {
    //     Authorization: `Bearer ${jwtToken}`,
    //   };
    // }
  }
  const response = await axios({
    url,
    method,
    data,
    headers: {
      ...headers,
      'Content-Type': contentType || 'application/json',
    },
  }).catch((err) => err.response);

  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }

  const { length } = Object.keys(response.data);
  const res = {
    error: false,
    message: 'success',
    data: length > 1 ? response.data : response.data.data,
  };
  return res;
}
