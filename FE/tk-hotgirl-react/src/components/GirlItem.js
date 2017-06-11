import React, { Component } from 'react';

class GirlItem extends Component {
  render() {
    return (
      <div className="col-sm-6 col-md-3 girl_item">
        <div className="girl_image_container">
          <img src="./img/1.png" className="girl_image" />
          <div className="girl_image_overlay">
            <button className="like_button"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
            <div className="description text-center">
              <span className="col-xs-4 ">
                <span className="glyphicon glyphicon-eye-open "aria-hidden="true"></span>
                <div>857</div>
              </span>

              <span className="col-xs-4">
                <span className="glyphicon glyphicon-time "aria-hidden="true"></span>
                <div>07/05/12</div>
              </span>
              <span className="col-xs-4">
                <span className=" glyphicon glyphicon-plus "aria-hidden="true"></span>
                <div>588</div>
              </span>
            </div>
          </div>
        </div>
        <div className="girl_item_content">
          <img src="./img/3.png" className="poster_avatar" />
          <h3>Dzuuung</h3>
          <small>HRC photos</small>
          <p>
            Aenean vestibulum ut orci nec porta. Cras interdum nisi eu efficitur pellentesque. Nulla at neque vitae mauris lobortis luctus nec nec mi. Fusce non accumsan neque, at viverra orci. Duis ac turpis quis turpis accumsan mattis. Nullam dictum diam quis pharetra dapibus. Nam dignissim enim non velit facilisis, sit amet consectetur mauris tempus. Aenean in lacus vitae enim interdum dignissim.
          </p>
        </div>
      </div>
    );
  }
}

export default GirlItem;
