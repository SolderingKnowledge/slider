import React, { Component } from 'react';
import "./Carousel.css";
class Carousel extends Component {
    render() {
        return (
            <p className="carousel">
                {/* <div id="arrowLeft"></div> */}
                <img id="carouselImage" src={this.props.img} alt='a' />
                {/* <div id="arrowRight"></div> */}
            </p>
        );
    }
}

export default Carousel;


