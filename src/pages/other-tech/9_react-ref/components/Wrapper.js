import React, { Component } from "react";
// import Person from './Person'

export default class componentName extends Component {

  render() {
    return (
      <div>
        <p>Wrapper</p>
        {this.props.children}
      </div>
    );
  }
}
