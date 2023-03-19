import React from 'react';
import { Card, ICardProps } from '../Card/Card';
import './cards.css';

const data: ICardProps[] = [
  {
    title: 'card1',
    descr: 'descr',
    story: 'story',
  },
  {
    title: 'card2',
    descr: 'descr',
    story: 'story',
  },
  {
    title: 'card3',
    descr: 'descr',
    story: 'story',
  },
];

export default class Cards extends React.Component {
  render() {
    return (
      <div className="cards">
        {data.map((item, index) => (
          <Card key={index.toString()} title={item.title} descr={item.descr} story={item.story} />
        ))}
      </div>
    );
  }
}
