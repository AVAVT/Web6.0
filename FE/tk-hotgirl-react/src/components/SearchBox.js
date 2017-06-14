import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBox extends Component {
  static propTypes = {
    filterImages : PropTypes.func.isRequired
  }

  onInputChange(event){
    this.props.filterImages(event.target.value);
  }

  render() {
    return (
      <div className="col-md-3 search_box">
        <input type="text" onChange={this.onInputChange.bind(this)} name="search" id="search" placeholder="Enter your search..." />
        <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
      </div>
    );
  }
}

export default SearchBox;
