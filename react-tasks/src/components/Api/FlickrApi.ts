// Need to use the React-specific entry point to import createApi
import * as toolkitRaw from '@reduxjs/toolkit/dist/query/react/';
type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { createApi, fetchBaseQuery } = ((toolkitRaw as TypeToolkitRaw).default ??
  toolkitRaw) as typeof toolkitRaw;

import {
  API_KEY,
  BASE_URL,
  GETINFO_PARAMS,
  IGetInfoApiOptions,
  IPhoto,
  IPhotoResponse,
  IResponse,
  ISearchApiOptions,
  SEARCH_PARAMS,
} from './constants';
import { getUrl } from './helpers';
import { ICardProps } from '../Card/Card';

export const flickrApi = createApi({
  reducerPath: 'flickrApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMany: builder.query<ICardProps[], ISearchApiOptions>({
      query: (options) => getUrl(SEARCH_PARAMS, API_KEY, options),
      transformResponse: (response: IResponse) => {
        if (response.stat === 'ok') return response.photos ? response.photos.photo : [];
        throw new Error(`Error ${response.stat}: ${response.message}`);
      },
    }),
    getById: builder.query<IPhoto | undefined, IGetInfoApiOptions>({
      query: (options) => getUrl(GETINFO_PARAMS, API_KEY, options),
      transformResponse: (response: IPhotoResponse) => {
        if (response.stat === 'ok') {
          return response.photo;
        }
        throw new Error(`Error ${response.stat}: ${response.message}`);
      },
    }),
  }),
});

export const { useGetManyQuery, useGetByIdQuery } = flickrApi;
