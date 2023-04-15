import React, { MouseEventHandler, useCallback, useState } from 'react';
import { getById } from '../Api/Api';
import { IPhoto } from '../Api/constants';
import { FullCard } from '../FullCard/FullCard';
import Modal from '../Modal/Modal';
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
  const [showFull, setShowFull] = useState(false);
  const [photo, setPhoto] = useState<IPhoto | undefined>(undefined);

  const handleClick: MouseEventHandler = useCallback(() => {
    if (showFull) {
      setShowFull((showFull) => !showFull);
    } else {
      getById({ photo_id: props.id })
        .then((res) => {
          setPhoto(res);
          setShowFull(!!res);
        })
        .catch(() => {
          setShowFull(false);
        });
    }
  }, [props, showFull]);

  const closeFull = useCallback(() => {
    setShowFull(false);
  }, []);
  let src = '';

  if (typeof props.imgPath === 'string' && props.imgPath !== '') {
    src = props.imgPath;
  }
  if (props.imgPath instanceof File) {
    src = window.URL.createObjectURL(props.imgPath);
  }
  if (props.server) {
    src = `https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}_n.jpg`;
  }

  return (
    <div className="card" role="card" onClick={handleClick}>
      <img src={src} alt="" className="card__img" />
      <div className="card__wrapper">
        <h4 className="card__title">{props.title}</h4>
        {props.breed && <p className="card__story">Breed: {props.breed}</p>}
        {props.gender && <p className="card__story">gender: {props.gender}</p>}
        <p className="card__story">{props.birthday ? `Birthday: ${props.birthday}` : ''}</p>
        <p className="card__story">{props.fromShelter ? 'from shelter' : ''}</p>
      </div>
      {showFull && photo && (
        <Modal onClick={closeFull}>
          <FullCard photo={photo} onClick={closeFull} />
        </Modal>
      )}
    </div>
  );
};
