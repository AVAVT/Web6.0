import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBox from './SearchBox';
import UserBox from './UserBox';

class Header extends Component {
  static propTypes = {
    filterImages : PropTypes.func.isRequired
  }

  render() {
    return (
      <header className="header">
        <section className="container">
          <div className="row">
            <SearchBox filterImages={this.props.filterImages} />

            <div className="col-md-6 text-center tklogo">
              <img src="./img/Logo.png" alt="Site Logo" />&nbsp;
              HOT GIRLS
            </div>

            <UserBox />
          </div>
        </section>
      </header>
    );
  }
}

export default Header;
