import React from 'react';
import { Card } from '../Card/Card';
import './cards.css';

import data from './cards-data';

export default class Cards extends React.Component {
  render() {
    return (
      <div className="cards">
        {data.map((item, index) => (
          <Card
            key={index.toString()}
            imgPath={item.imgPath}
            title={item.title}
            descr={item.descr}
            story={item.story}
          />
        ))}
      </div>
    );
  }
}
