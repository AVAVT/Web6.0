import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

import 'bootstrap/dist/css/bootstrap.min.css';

import $ from 'jquery';

import Header from './components/Header';
import GirlItem from './components/GirlItem';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      items       : [],
      displayItems: [],
      page        : 1
    }

    this.checkScrollPosition = this.checkScrollPosition.bind(this);
    this.getNewPage = this.getNewPage.bind(this);
    this.filterImages = this.filterImages.bind(this);
  }

  componentDidMount(){
    this.getNewPage();

    $(window).on('scroll', this.checkScrollPosition);
  }

  checkScrollPosition(){
    if($(document).height() < $(window).height() + $(window).scrollTop() + 200){
      this.getNewPage();
    }
  }

  getNewPage(){
    $.ajax({
      url : `/imagesData.json?p=${this.state.page}`,
      type: "get"
    })
    .done(function(res){
      this.setState({
        items       : this.state.items.concat(res.items),
        displayItems: this.state.items.concat(res.items),
        page        : this.state.page+1
      });
    }.bind(this))
    .fail(function(err){
      console.error(err);
    });
  }

  filterImages(searchString){
    this.setState({
      displayItems : this.state.items.filter(item => {
        if(item.posterName.toLowerCase().indexOf(searchString.toLowerCase()) != -1) return true;
        else return false;
      })
    });
  }

  render() {
    const items = this.state.displayItems.map((item) => {
      return <GirlItem {...item} />;
    });

    // function mockMap(){
    //   var items = [];
    //   for(var i=0; i< imageDatas.length;i++){
    //     items.push(<GirlItem {...imageDatas[i]} />);
    //   }
    //   return items;
    // }
    // read more: map(), reduce(), filter()
    // even more: some(), every()

    const masonryOptions = {
      columnWidth: '.girl_item',
      itemSelector: '.girl_item',
      percentPosition: true
    };

    return (
      <div className="App">
        <Header filterImages={this.filterImages} />

        <section className="container">
          <Masonry
            className={'row'}
            elementType={'div'}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={true}
            >
            {items}
          </Masonry>
        </section>
      </div>
    );
  }
}

export default App;
