import React, { Component } from 'react';

class GirlItem extends Component {

  render() {
    return (
      <div className="col-sm-6 col-md-3 girl_item">
        <div className="girl_image_container">
          <img src={this.props.imageUrl} className="girl_image" alt={this.props.posterName} />
          <div className="girl_image_overlay">
            <button className="like_button"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
            <div className="description text-center">
              <span className="col-xs-4">
                <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                <div>{this.props.view}</div>
              </span>

              <span className="col-xs-4">
                <span className="glyphicon glyphicon-time" aria-hidden="true"></span>
                <div>{this.props.date}</div>
              </span>
              <span className="col-xs-4">
                <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                <div>{this.props.plus}</div>
              </span>
            </div>
          </div>
        </div>
        <div className="girl_item_content">
          <img src={this.props.posterAvatar} className="poster_avatar" alt={this.props.posterName} />
          <h3>{this.props.posterName}</h3>
          <small>{this.props.posterTitle}</small>
          <p>{this.props.content}</p>
        </div>
      </div>
    );
  }
}

export default GirlItem;
