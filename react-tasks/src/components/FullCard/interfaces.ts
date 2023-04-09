import { MouseEventHandler } from 'react';
import { IPhoto } from '../Api/constants';

export interface IFullCardProps {
  photo: IPhoto;
  onClick: () => void;
}
