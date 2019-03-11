import React, { Component } from 'react';
import "./Carousel.css";
class Carousel extends Component {
    render() {
        console.log(this.props.data.img)
        return (
            <p className="carousel">
                {/* <div id="arrowLeft"></div> */}
                <img id="carouselImage" src={this.props.data.img} alt='a' />
                {/* <div id="arrowRight"></div> */}
            </p>
        );
    }
}

export default Carousel;


