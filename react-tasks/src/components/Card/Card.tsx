import React from 'react';
import './card.css';

export interface ICardProps {
  imgPath: string;
  title: string;
  descr: string;
  story: string;
}
export class Card extends React.Component<ICardProps> {
  constructor(props: ICardProps) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <img src={this.props.imgPath} alt="" className="card__img" />
        <div className="card__wrapper">
          <h4 className="card__title">{this.props.title}</h4>
          <h5 className="card__description">{this.props.descr}</h5>
          <p className="card__story">{this.props.story}</p>
        </div>
      </div>
    );
  }
}
