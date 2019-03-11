import React, { Component } from 'react';
import "./Carousel.css";
import Grid from "./Grid";

class Carousel extends Component {
    render() {
        // var color = "hello";
        return (
            <p className="carousel">
                {/* <Grid color={color} /> */}
                <img id="carouselImage" src={this.props.data.img} alt='a' />
            </p>
        );
    }
}

export default Carousel;


