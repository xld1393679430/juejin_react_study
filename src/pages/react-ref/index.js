import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Person from "./components/Person";

class Index extends Component {
  componentDidMount() {
    console.log(this.refs, "Index -- componentDidMount");
  }

  renderPerson = () => {
    return (
      <Wrapper>
        <div ref="divRef">divRef</div>
      </Wrapper>
    );
  };

  render() {
    return (
      <div>
        <h1>react ref</h1>
        {this.renderPerson()}
      </div>
    );
  }
}

export default Index;