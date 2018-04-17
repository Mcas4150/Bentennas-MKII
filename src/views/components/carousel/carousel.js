import React, { Component } from "react";
import Carousel from "nuka-carousel";
import './carousel.css';




export default class MixCarousel extends Component {
  render() {
    return (
        <div className="mix-page__carousel">
            <Carousel wrapAround="true" autoplay="false">
            <img src="https://i.imgur.com/yww3bTL.png"/>
            <img src="https://i.imgur.com/9iMnhp9.jpg"/>
            <img src="https://i.imgur.com/9n9UFI4.jpg"/>
            <img src="https://i.imgur.com/iVswLte.jpg"/>
            <img src="https://i.imgur.com/bCheMw3.jpg"/>
            </Carousel>
      </div>
     
    );
  }
}