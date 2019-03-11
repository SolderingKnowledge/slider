import React, { Component } from 'react';
import Carousel from "./Carousel";

class Grid extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { photo } = this.props;
        return (
            <img style={{ margin: '5px', border: 'solid 1px red' }} width="100px" height="100px" src={photo.img} />
        );
    }
}

export default Grid;
