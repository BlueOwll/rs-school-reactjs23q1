// Need to use the React-specific entry point to import createApi
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react/';
import * as toolkitRaw from '@reduxjs/toolkit/dist/query/react/';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { createApi, fetchBaseQuery } = ((toolkitRaw as any).default ??
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

// Define a service using a base URL and expected endpoints
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
          console.log(response.photo);
          return response.photo;
        }
        throw new Error(`Error ${response.stat}: ${response.message}`);
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetManyQuery, useGetByIdQuery } = flickrApi;
