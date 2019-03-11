import React, { Component } from 'react';
import "./App.css";
import Grid from "./components/Grid";
import "./App.css";
import Carousel from "./components/Carousel";
let data = [
  { img: "https://via.placeholder.com/150/92c952", name: "image1", id: 1 },
  { img: "https://via.placeholder.com/150/771796", name: "image2", id: 2 },
  { img: "https://via.placeholder.com/150/24f355", name: "image3", id: 3 },
  { img: "https://via.placeholder.com/150/d32776", name: "image4", id: 4 },
  { img: "https://via.placeholder.com/150/f66b97", name: "image5", id: 5 },
  { img: "https://via.placeholder.com/150/56a8c2", name: "image6", id: 6 },
  { img: "https://via.placeholder.com/150/b0f7cc", name: "image7", id: 7 },
  { img: "https://via.placeholder.com/150/54176f", name: "image8", id: 8 },
  { img: "https://via.placeholder.com/150/51aa97", name: "image9", id: 9 },
  { img: "https://via.placeholder.com/150/810b14", name: "image10", id: 10 },
  { img: "https://via.placeholder.com/150/810b14", name: "image11", id: 11 },
  { img: "https://via.placeholder.com/150/d32776", name: "image12", id: 12 },
];

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: data[0].img,
      counter: 0
    }

  }
  prev = () => {
    if (this.state.counter > 0) {
      this.setState({
        index: data[this.state.counter--].img
      })
    }
  }
  next = () => {
    this.setState({
      index: data[this.state.counter++].img
    })
  }
  click = (img) => {
    this.setState({
      index: img
    });
  }
  render() {
    return (
      <div className="container">
        <p onClick={this.prev} id="arrowLeft"></p>
        <Carousel img={this.state.index} />
        <p onClick={this.next} id="arrowRight"></p>
        {
          data.map((item) => {
            return (
              <div id="images" onClick={() => this.click(item.img)}>
                <Grid key={item.id} photo={item} />
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Gallery;
