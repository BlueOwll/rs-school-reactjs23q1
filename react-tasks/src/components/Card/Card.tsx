import React from 'react';
import './card.css';

export interface ICardProps {
  imgPath: File | string;
  birthday?: string;
  gender?: string;
  breed?: string;
  fromShelter?: boolean;
  farm?: number;
  id: string;
  isfamily?: number;
  isfriend?: number;
  ispublic?: number;
  owner?: string;
  secret?: string;
  server?: string;
  title: string;
}

export const Card = (props: ICardProps) => {
  const src = `https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}_n.jpg`;
  //n	small	320
  return (
    <div className="card" role="card">
      <img src={src} alt="" className="card__img" />
      <div className="card__wrapper">
        <h4 className="card__title">{props.title}</h4>
        {props.breed && <p className="card__story">Breed: {props.breed}</p>}
        {props.gender && <p className="card__story">gender: {props.gender}</p>}
        <p className="card__story">{props.birthday ? `Birthday: ${props.birthday}` : ''}</p>
        <p className="card__story">{props.fromShelter ? 'from shelter' : ''}</p>
      </div>
    </div>
  );
};
