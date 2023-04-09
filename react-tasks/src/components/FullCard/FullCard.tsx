import React, { MouseEventHandler } from 'react';
import './FullCard.css';
import { IFullCardProps } from './interfaces';

export const FullCard = (props: IFullCardProps) => {
  const src = `https://live.staticflickr.com/${props.photo.server}/${props.photo.id}_${props.photo.secret}_z.jpg`;
  // /(none)	medium	500
  // z	medium	640

  const handleClick: MouseEventHandler = (event) => {
    event.stopPropagation();
    props.onClick();
  };

  return (
    <div className="full-card" role="full-card">
      <img src={src} alt="" className="full-card__img" />
      <div className="full-card__wrapper">
        <button className="close-button" onClick={handleClick}>
          X
        </button>
        <div className="full-card__content">
          <h4 className="full-card__title">{props.photo.title._content}</h4>
          <p className="full-card__viewed">Owner: {props.photo.owner.realname}</p>
          <p>{props.photo.description._content.slice(0, 300)}</p>
          <p className="full-card__viewed">Viewed: {props.photo.views}</p>
        </div>
      </div>
    </div>
  );
};
