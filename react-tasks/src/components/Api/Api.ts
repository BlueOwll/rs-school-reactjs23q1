import { API_KEY, API_PARAMS, API_URL, IResponse } from './constants';

export interface IApiOptions {
  text?: string;
}
export const getData = (options: IApiOptions) => {
  return fetch(getUrl(API_URL, API_KEY, options)) // change to get api/users/current
    .then(errorHandler)
    .then((response) => response.json())
    .then(printData)
    .then((data) => {
      const responseData = data as IResponse;
      if (responseData.stat === 'ok') return responseData.photos ? responseData.photos.photo : [];
      throw new Error(`Error ${responseData.stat}: ${responseData.message}`);
    })
    .catch((err) => {
      console.log(err.message);
      throw new Error(err.message);
    });
};

export const errorHandler = (res: Response) => {
  const status = res.status.toString();
  console.log(res);
  if (res.ok) return res;
  return res.text().then((data) => {
    throw new Error(`Error ${status}: ${data}`);
  });
};

export const printData = <T>(data: T) => {
  console.log('api:');
  console.log(data);
  return data;
};
const getUrl = (url: string, key: string, options: IApiOptions) => {
  return (
    `${url}&${API_PARAMS.api_key}=${key}` +
    Object.entries(options)
      .map((item) => `&${item[0]}=${item[1]}`)
      .join('')
  );
};
