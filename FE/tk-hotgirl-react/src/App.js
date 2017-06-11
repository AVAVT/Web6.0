import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import GirlItem from './components/GirlItem';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const imageDatas = [
      {
        "id"            : 1,
        "imageUrl"      : "http://www.vatcss.info/TechKidsGirls/1.png",
        "view"          : 857,
        "date"          : "07/05/12",
        "plus"          : 588,
        "posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/1.png",
        "posterName"    : "Dzungggg",
        "posterTitle"   : "HRC Photo",
        "content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
      },
      {
        "id"            : 2,
        "imageUrl"      : "http://www.vatcss.info/TechKidsGirls/3.png",
        "view"          : 857,
        "date"          : "07/05/12",
        "plus"          : 588,
        "posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/2.png",
        "posterName"    : "Sannnn",
        "posterTitle"   : "HRC Photo",
        "content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
      },
      {
        "id"            : 3,
        "imageUrl"      : "http://www.vatcss.info/TechKidsGirls/2.png",
        "view"          : 857,
        "date"          : "07/05/12",
        "plus"          : 588,
        "posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/1.png",
        "posterName"    : "Tranggggg",
        "posterTitle"   : "HRC Photo",
        "content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
      },
      {
        "id"            : 4,
        "imageUrl"      : "http://www.vatcss.info/TechKidsGirls/4.png",
        "view"          : 857,
        "date"          : "07/05/12",
        "plus"          : 588,
        "posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/3.png",
        "posterName"    : "Ngannnnn",
        "posterTitle"   : "HRC Photo",
        "content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
      },
      {
        "id"            : 5,
        "imageUrl"      : "http://www.vatcss.info/TechKidsGirls/1.png",
        "view"          : 857,
        "date"          : "07/05/12",
        "plus"          : 588,
        "posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/1.png",
        "posterName"    : "Dzungggg",
        "posterTitle"   : "HRC Photo",
        "content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
      },
      {
        "id"            : 6,
        "imageUrl"      : "http://www.vatcss.info/TechKidsGirls/3.png",
        "view"          : 857,
        "date"          : "07/05/12",
        "plus"          : 588,
        "posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/2.png",
        "posterName"    : "Sannnn",
        "posterTitle"   : "HRC Photo",
        "content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
      },
      {
        "id"            : 7,
        "imageUrl"      : "http://www.vatcss.info/TechKidsGirls/2.png",
        "view"          : 857,
        "date"          : "07/05/12",
        "plus"          : 588,
        "posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/1.png",
        "posterName"    : "Tranggggg",
        "posterTitle"   : "HRC Photo",
        "content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
      },
      {
        "id"            : 8,
        "imageUrl"      : "http://www.vatcss.info/TechKidsGirls/4.png",
        "view"          : 857,
        "date"          : "07/05/12",
        "plus"          : 588,
        "posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/3.png",
        "posterName"    : "Ngannnnn",
        "posterTitle"   : "HRC Photo",
        "content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
      }
    ];

    const items = imageDatas.map((item) => {
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

    return (
      <div className="App">
        <Header />

        <section className="container">
          <div className="row">
            {items}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
