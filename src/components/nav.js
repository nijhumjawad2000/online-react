import React, { Component } from "react";
import { Link } from "react-router-dom";
const style = {
  margin: "15px",
  color: "white",
};
class Nav extends Component {
  render() {
    return (
      <nav
        className="fixed-top text-center"
        style={{
          backgroundColor: "black",
          padding: "20px",
          opacity: "0.8",
          fontFamily: "fantasy",
        }}
      >
        <Link style={style} to="/">
          {" "}
          Home
        </Link>
        <Link style={style} to="/login">
          {" "}
          sign in
        </Link>
        <Link style={style} to="/signup">
          {" "}
          sign up
        </Link>
        <Link style={style} to="/contact">
          {" "}
          Contact us
        </Link>
        <Link style={style} to="/review">
          {" "}
          Review
        </Link>
      </nav>
    );
  }
}

export default Nav;
