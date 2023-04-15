import { ISearchApiOptions, IGetInfoApiOptions, API_PARAMS } from './constants';

export const getUrl = (
  method_params: string,
  key: string,
  options?: ISearchApiOptions | IGetInfoApiOptions
) => {
  return (
    `/${method_params}&${API_PARAMS.api_key}=${key}` +
    (options
      ? Object.entries(options)
          .map((item) => `&${item[0]}=${item[1]}`)
          .join('')
      : '')
  );
};
