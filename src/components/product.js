import React, { Component } from "react";
import image from "../img/dress.jpeg";
import image1 from "../img/dress1.jpg";
import image2 from "../img/dress2.jpg";
class Product extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-sm d-flex flex-sm-column justify-content-sm-center text-center">
            <div className="card">
              <img className="card-img-top" src={image} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm d-flex flex-sm-column justify-content-sm-center text-center">
            <h3>NEW, NEW, NEW</h3>
            <h5>shorts all summer</h5>
            <button
              style={{ paddingTop: "3vh", paddingBottom: "3vh" }}
              type="button"
              className="btn btn-outline-secondary"
            >
              Shop boys
            </button>
            <button
              style={{ paddingTop: "3vh", paddingBottom: "3vh" }}
              type="button"
              className="btn btn-outline-secondary"
            >
              Shop girls
            </button>
          </div>
          <div className="col-sm d-flex flex-sm-column justify-content-sm-center text-center">
            <div className="card">
              <img className="card-img-top" src={image1} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*=========================*/}
        <div className="row">
          <div className="col-sm d-flex flex-sm-column justify-content-sm-center text-center">
            <div className="card">
              <img className="card-img-top" src={image2} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm d-flex flex-sm-column justify-content-sm-center text-center">
            <div className="card">
              <img className="card-img-top" src={image1} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm d-flex flex-sm-column justify-content-sm-center text-center">
            <h3>NEW, NEW, NEW</h3>
            <h5>shorts all summer</h5>
            <button
              style={{ paddingTop: "3vh", paddingBottom: "3vh" }}
              type="button"
              className="btn btn-outline-secondary"
            >
              Shop boys
            </button>
            <button
              style={{ paddingTop: "3vh", paddingBottom: "3vh" }}
              type="button"
              className="btn btn-outline-secondary"
            >
              Shop girls
            </button>
          </div>
        </div>
        {/* ========================= */}
        <div className="row">
          <div className="col-sm d-flex flex-sm-column justify-content-sm-center text-center">
            <div className="card">
              <img className="card-img-top" src={image2} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm d-flex flex-sm-column justify-content-sm-center text-center">
            <div className="card">
              <img className="card-img-top" src={image1} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm d-flex flex-sm-column justify-content-sm-center text-center">
            <h3>NEW, NEW, NEW</h3>
            <h5>shorts all summer</h5>
            <button
              style={{ paddingTop: "3vh", paddingBottom: "3vh" }}
              type="button"
              className="btn btn-outline-secondary"
            >
              Shop boys
            </button>
            <button
              style={{ paddingTop: "3vh", paddingBottom: "3vh" }}
              type="button"
              className="btn btn-outline-secondary"
            >
              Shop girls
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
