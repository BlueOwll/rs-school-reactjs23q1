import { ICardProps } from '../Card/Card';

export const BASE_URL = 'https://api.flickr.com/services/rest';
export const SEARCH_PARAMS =
  '?method=flickr.photos.search&format=json&content_type=1&nojsoncallback=1&per_page=20';
export const GETINFO_PARAMS = '?method=flickr.photos.getInfo&format=json&nojsoncallback=1';
export const GETRECENT_PARAMS = '?method=flickr.photos.getRecent&format=json&nojsoncallback=1';

export const API_KEY = '3c1cd2519a11fc608f594cfe4a1d31cf'; // import.meta.env.VITE_API_KEY;

export enum API_PARAMS {
  api_key = 'api_key',
  text = 'text',
  perPage = 'per_page',
  page = 'page',
  photo_id = 'photo_id',
  min_taken_date = 'min_taken_date',
}

export interface ISearchApiOptions {
  text?: string;
  min_taken_date?: number;
}
export interface IGetInfoApiOptions {
  photo_id: string;
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
export interface IPhotoResponse {
  photo?: IPhoto;
  stat: string;
  message?: string;
}

export interface IPhoto {
  comments: {
    _content: string;
  };
  dates: {
    posted: string;
    taken: string;
    takengranularity: number;
    takenunknown: string;
    lastupdate: string;
  };
  dateuploaded: string;
  description: {
    _content: string;
  };
  editability: {
    cancomment: number;
    canaddmeta: number;
  };
  farm: number;
  id: string;
  isfavorite: number;
  license: string;
  media: string;
  notes: {
    note: [];
  };
  originalformat: string;
  originalsecret: string;
  owner: {
    nsid: string;
    username: string;
    realname: string;
    location: string;
    iconserver: string;
  };
  people: {
    haspeople: number;
  };
  publiceditability: {
    cancomment: number;
    canaddmeta: number;
  };
  rotation: number;
  safety_level: string;
  secret: string;
  server: string;
  tags: {
    tag: object[];
  };
  title: {
    _content: string;
  };
  urls: {
    url: object[];
  };
  usage: {
    candownload: number;
    canblog: number;
    canprint: number;
    canshare: number;
  };
  views: string;
  visibility: {
    ispublic: number;
    isfriend: number;
    isfamily: number;
  };
}
