import React, { Component } from 'react'
import "./search-box.style.css";

export default class SearchBox extends Component {
  render() {
    return (
      <>
      <input
      type="text"
      className={` search-box ${this.props.className}`}
      placeholder={this.props?.placeholder}
      onChange={this.props?.onChangeHandler}
    /> 
      </>
    )
  }
}
