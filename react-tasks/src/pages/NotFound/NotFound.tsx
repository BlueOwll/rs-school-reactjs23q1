import React from 'react';
import './NotFound.css';

class NotFound extends React.Component {
  render() {
    return (
      <div className="not-found">
        <h3>
          Error 404: <br /> page not found
        </h3>
      </div>
    );
  }
}

export default NotFound;
