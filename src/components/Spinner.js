import loading from "./loading.gif";
import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-3">
        <img className="my-3" src={loading} alt="loading" />
      </div>
    );
  }
}
