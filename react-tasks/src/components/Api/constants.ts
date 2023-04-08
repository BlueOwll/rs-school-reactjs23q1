import { ICardProps } from '../Card/Card';

export const API_URL =
  'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&content_type=1&nojsoncallback=1&per_page=20';
export const API_KEY = '3c1cd2519a11fc608f594cfe4a1d31cf';
export enum API_PARAMS {
  api_key = 'api_key',
  text = 'text',
  perPage = 'per_page',
  page = 'page',
}

export interface IResponse {
  stat: string;
  photos?: {
    page: number;
    pages: number;
    perpage: number;
    total: number;
    photo: ICardProps[];
  };
  message?: string;
}
