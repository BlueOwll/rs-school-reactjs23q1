import React, { MouseEventHandler } from 'react';
import './FullCard.css';
import { IFullCardProps } from './interfaces';
import { useGetByIdQuery } from '../Api/FlickrApi';
import Spinner from '../Spinner/Spinner';

export const FullCard = (props: IFullCardProps) => {
  const { data: photo, isLoading, isError } = useGetByIdQuery({ photo_id: props.photo });

  const src = `https://live.staticflickr.com/${photo?.server}/${photo?.id}_${photo?.secret}_z.jpg`;
  // /(none)	medium	500
  // z	medium	640

  const handleClick: MouseEventHandler = (event) => {
    event.stopPropagation();
    props.onClick();
  };

  return (
    <>
      {isLoading && <Spinner />}
      {photo && (
        <div className="full-card" role="full-card">
          <img src={src} alt="" className="full-card__img" />
          <div className="full-card__wrapper">
            <button className="close-button" onClick={handleClick}>
              X
            </button>
            <div className="full-card__content">
              <h4 className="full-card__title">{photo.title._content}</h4>
              <p className="full-card__viewed">Owner: {photo.owner.realname}</p>
              <p>{photo.description._content.slice(0, 300)}</p>
              <p className="full-card__viewed">Viewed: {photo.views}</p>
            </div>
          </div>
        </div>
      )}
      {isError && <div className="cards">Error when uploading data</div>}
    </>
  );
};
