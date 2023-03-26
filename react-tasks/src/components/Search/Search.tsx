import React, { ChangeEvent } from 'react';
import './Search.css';

const keyText = 'inputText';

class Search extends React.Component {
  state = {
    text: '',
  };

  componentDidMount(): void {
    const text = localStorage.getItem(keyText) || '';
    this.setState({ text: text });
  }

  componentWillUnmount(): void {
    localStorage.setItem(keyText, this.state.text);
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div className="search">
        <div className="search__wrapper">
          <input
            type="search"
            className="search__input"
            defaultValue={this.state.text}
            onChange={this.handleChange}
          />
          <button className="search__button">Search</button>
        </div>
      </div>
    );
  }
}

export default Search;
