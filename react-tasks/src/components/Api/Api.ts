import {
  API_KEY,
  API_PARAMS,
  BASE_URL,
  GETINFO_PARAMS,
  GETRECENT_PARAMS,
  IGetInfoApiOptions,
  IPhotoResponse,
  IResponse,
  ISearchApiOptions,
  SEARCH_PARAMS,
} from './constants';
import { getUrl } from './helpers';

export const getMany = (options: ISearchApiOptions) => {
  return fetch(BASE_URL + getUrl(SEARCH_PARAMS, API_KEY, options))
    .then(errorHandler)
    .then((response) => response.json())
    .then((data) => {
      const responseData = data as IResponse;
      if (responseData.stat === 'ok') return responseData.photos ? responseData.photos.photo : [];
      throw new Error(`Error ${responseData.stat}: ${responseData.message}`);
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const getById = (options: IGetInfoApiOptions) => {
  return fetch(BASE_URL + getUrl(GETINFO_PARAMS, API_KEY, options))
    .then(errorHandler)
    .then((response) => response.json())
    .then((res) => printData(res))
    .then((data) => {
      const responseData = data as IPhotoResponse;
      if (responseData.stat === 'ok') return responseData.photo;
      throw new Error(`Error ${responseData.stat}: ${responseData.message}`);
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const getRecent = () => {
  return fetch(BASE_URL + getUrl(GETRECENT_PARAMS, API_KEY))
    .then(errorHandler)
    .then((response) => response.json())
    .then((data) => {
      const responseData = data as IResponse;
      if (responseData.stat === 'ok') return responseData.photos ? responseData.photos.photo : [];
      throw new Error(`Error ${responseData.stat}: ${responseData.message}`);
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const errorHandler = (res: Response) => {
  const status = res.status.toString();
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

// const getUrl = (
//   method_params: string,
//   key: string,
//   options?: ISearchApiOptions | IGetInfoApiOptions
// ) => {
//   return (
//     `${BASE_URL}/${method_params}&${API_PARAMS.api_key}=${key}` +
//     (options
//       ? Object.entries(options)
//           .map((item) => `&${item[0]}=${item[1]}`)
//           .join('')
//       : '')
//   );
// };
