import React from 'react';
import './card.css';

export interface ICardProps {
  imgPath: File | string;
  name: string;
  birthday?: string;
  gender: string;
  breed: string;
  fromShelter: boolean;
}

export const Card = (props: ICardProps) => {
  const src =
    typeof props.imgPath === 'string' ? props.imgPath : window.URL.createObjectURL(props.imgPath);

  return (
    <div className="card" role="card">
      <img src={src} alt="" className="card__img" />
      <div className="card__wrapper">
        <h4 className="card__title">{props.name}</h4>
        <p className="card__story">Breed: {props.breed}</p>
        <p className="card__story">gender: {props.gender}</p>
        <p className="card__story">{props.birthday ? `Birthday: ${props.birthday}` : ''}</p>
        <p className="card__story">{props.fromShelter ? 'from shelter' : ''}</p>
      </div>
    </div>
  );
};
