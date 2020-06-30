import React, { Component } from "react";
import image from "../img/title.jpg";

class Title extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-img-overlay">
            <p style={{ color: "white" }} className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <img src={image} className="card-img-top" alt="..." />
        </div>
      </div>
    );
  }
}

export default Title;
