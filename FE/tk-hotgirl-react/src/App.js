import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import GirlItem from './components/GirlItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <section className="container">
          <div className="row">
            <GirlItem />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
