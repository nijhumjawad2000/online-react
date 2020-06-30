import React, { Component } from "react";
class UncontrolledForm extends Component {
  handleForm = (event) => {
    console.dir(event.target);
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleForm}>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="nijhum jawad"
          />
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="nijhum_jawad2000@yahoo.com"
          />
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="*****"
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default UncontrolledForm;
