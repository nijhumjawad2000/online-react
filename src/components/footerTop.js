import React, { Component } from "react";
import { Link } from "react-router-dom";
class FooterTop extends Component {
  render() {
    return (
      <div className="row ">
        <div className="col-sm list-group text-center">
          <h4>About</h4>
          <Link to="/">lorem</Link>
          <Link to="/">lorem</Link>
          <Link to="/">lorem</Link>
          <Link to="/">lorem</Link>
          <Link to="/">lorem</Link>
          <Link to="/">lorem</Link>
          <Link to="/">lorem</Link>
          <Link to="/">lorem</Link>
          <Link to="/">lorem</Link>
        </div>
        <div className="col-sm list-group text-center">
          <h4>Help</h4>
          <Link to="/">lorem</Link>
          <Link to="/">lorem</Link>
          <Link to="/">lorem</Link>
          <Link to="/">lorem</Link>
          <Link to="/">lorem</Link>
          <Link to="/">lorem</Link>
          <Link to="/">lorem</Link>
          <Link to="/">lorem</Link>
          <Link to="/">lorem</Link>
        </div>
        <div className="col-sm text-center">
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-twitter"></a>
          <a href="#" className="fa fa-linkedin"></a>
        </div>
      </div>
    );
  }
}

export default FooterTop;
