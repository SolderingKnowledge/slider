import React, { Component } from 'react';
import Carousel from "./Carousel";

class Grid extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let value = "0px";
        let { photo } = this.props;
        let { index } = this.props;
        if (index === photo.id) {
            value = "5px";
        }
        return (
            <img style={{ margin: '5px' }} border={value} width="100px" height="100px" src={photo.img} />
        );
    }
}

export default Grid;
// border={color}s
// border={color}