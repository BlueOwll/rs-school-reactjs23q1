import React from 'react';
import './card.css';

export interface ICardProps {
  imgPath: File | string;
  name: string;
  birthday?: string;
  sex: string;
  breed: string;
  fromShelter: boolean;
}
export class Card extends React.Component<ICardProps> {
  constructor(props: ICardProps) {
    super(props);
    // window.URL.createObjectURL()
  }

  render() {
    const src =
      typeof this.props.imgPath === 'string'
        ? this.props.imgPath
        : window.URL.createObjectURL(this.props.imgPath);

    return (
      <div className="card">
        <img src={src} alt="" className="card__img" />
        <div className="card__wrapper">
          <h4 className="card__title">{this.props.name}</h4>
          <p className="card__story">Breed: {this.props.breed}</p>
          <p className="card__story">Sex: {this.props.sex}</p>
          <p className="card__story">
            {this.props.birthday ? `Birthday: ${this.props.birthday}` : ''}
          </p>
          <p className="card__story">{this.props.fromShelter ? 'from shelter' : ''}</p>
        </div>
      </div>
    );
  }
}
