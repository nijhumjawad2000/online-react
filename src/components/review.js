import React, { Component } from "react";
const star = {
  color: "orange",
};
class Review extends Component {
  render() {
    return (
      <div style={{ marginTop: "10vh" }} className="form-group container">
        <form>
          <div>
            <h2>Your Rating</h2>
            <span style={star} className="fa fa-star"></span>
            <span style={star} className="fa fa-star"></span>
            <span style={star} className="fa fa-star "></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput">Review Title</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Example input placeholder"
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Your Review</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div>
            <p>Would you recommend this product?</p>
            <div class="btn-group">
              <button
                style={{ marginRight: "2px" }}
                type="button"
                class="btn btn-primary"
              >
                Yes
              </button>
              <button type="button" class="btn btn-primary">
                No
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Review;
