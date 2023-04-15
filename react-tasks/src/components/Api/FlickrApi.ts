// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, BASE_URL, IResponse, ISearchApiOptions, SEARCH_PARAMS } from './constants';
import { getUrl } from './helpers';
import { ICardProps } from '../Card/Card';

// Define a service using a base URL and expected endpoints
export const flickrApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMany: builder.query<ICardProps[], ISearchApiOptions>({
      query: (options) => getUrl(SEARCH_PARAMS, API_KEY, options),
      transformResponse: (response: IResponse) => {
        if (response.stat === 'ok') return response.photos ? response.photos.photo : [];
        throw new Error(`Error ${response.stat}: ${response.message}`);
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetManyQuery } = flickrApi;
