import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
      <div className="col-md-3 search_box">
        <input type="text" name="search" id="search" placeholder="Enter your search..." />
        <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
      </div>
    );
  }
}

export default SearchBox;
