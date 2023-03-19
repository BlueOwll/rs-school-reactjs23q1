import React from 'react';
import './card.css';

export interface ICardProps {
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
        <div className="card__wrapper">
          <h3 className="card__title">{this.props.title}</h3>
          <h4 className="card__description">{this.props.descr}</h4>
          <p className="card__story">{this.props.story}</p>
        </div>
      </div>
    );
  }
}
