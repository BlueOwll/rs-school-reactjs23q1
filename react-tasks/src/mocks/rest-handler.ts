import { rest } from 'msw';
import { BASE_URL, IPhoto } from '../components/Api/constants';

export const photo: IPhoto = {
  id: '52804712907',
  secret: 'cd90c0b473',
  server: '65535',
  farm: 66,
  dateuploaded: '1681079223',
  isfavorite: 0,
  license: '0',
  safety_level: '0',
  rotation: 0,
  originalsecret: '0b4e93d7b0',
  originalformat: 'jpg',
  owner: {
    nsid: '186137145@N08',
    username: 'oreru',
    realname: 'Delphine Demarche',
    location: '',
    iconserver: '65535',
  },
  title: {
    _content: 'About last night…',
  },
  description: {
    _content: '',
  },
  visibility: {
    ispublic: 1,
    isfriend: 0,
    isfamily: 0,
  },
  dates: {
    posted: '1681079223',
    taken: '2023-04-09 02:25:50',
    takengranularity: 0,
    takenunknown: '0',
    lastupdate: '1681079465',
  },
  views: '0',
  editability: {
    cancomment: 0,
    canaddmeta: 0,
  },
  publiceditability: {
    cancomment: 1,
    canaddmeta: 0,
  },
  usage: {
    candownload: 1,
    canblog: 0,
    canprint: 0,
    canshare: 1,
  },
  comments: {
    _content: '0',
  },
  notes: {
    note: [],
  },
  people: {
    haspeople: 0,
  },
  tags: {
    tag: [],
  },
  urls: {
    url: [
      {
        type: 'photopage',
        _content: 'https://www.flickr.com/photos/186137145@N08/52804712907/',
      },
    ],
  },
  media: 'photo',
};

export const handlers = [
  rest.get(BASE_URL, (req, res, ctx) => {
    const method = req.url.searchParams.get('method');
    const photoId = req.url.searchParams.get('photo_id');
    console.log(method);
    if (method === 'flickr.photos.getInfo' && photoId) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(200),
        ctx.json({
          photo: {
            ...photo,
            id: photoId,
          },
          stat: 'ok',
        })
      );
    }
    // If authenticated, return a mocked user details
    return res(
      ctx.status(400),
      ctx.json({
        stat: 'error',
        message: 'Bad request',
      })
    );
  }),
];
