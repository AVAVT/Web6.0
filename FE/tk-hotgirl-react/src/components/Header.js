import React, { Component } from 'react';

import SearchBox from './SearchBox';
import UserBox from './UserBox';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <section className="container">
          <div className="row">
            <SearchBox />

            <div className="col-md-6 text-center tklogo">
              <img src="./img/Logo.png" />&nbsp;
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
