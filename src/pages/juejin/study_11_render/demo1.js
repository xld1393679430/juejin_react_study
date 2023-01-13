import React from "react";
import { Button } from "antd";

function Son({ number }) {
  return <p>Son number: {number}</p>;
}

class MyMemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberA: 0,
      numberB: 0,
    };

    this.component = <Son number={this.state.numberA} />;
  }

  handleAddNumberA = () => {
    this.setState((prev) => {
      return {
        numberA: prev.numberA + 1,
      };
    });
  };

  handleAddNumberB = () => {
    this.setState((prev) => {
      return {
        numberB: prev.numberB + 1,
      };
    });
  };

  // 模拟 memo 当props属性改变的时候子组件才渲染
  renderComponent = () => {
    const { numberA } = this.state;
    const { props } = this.component;
    if (props.number === numberA) {
      return this.component;
    }
    this.component = React.cloneElement(this.component, { number: numberA });
    return this.component;
  };

  render() {
    const { numberA, numberB } = this.state;
    return (
      <div>
        {this.renderComponent()}
        <div>
          <p>numberA: {numberA} </p>
          <Button onClick={this.handleAddNumberA}>增加A</Button>
        </div>
        <div>
          <p>numberB: {numberB} </p>
          <Button onClick={this.handleAddNumberB}>增加B</Button>
        </div>
      </div>
    );
  }
}

export default MyMemo;


export const code = `
import React from "react";
import { Button } from "antd";

function Son({ number }) {
  return <p>Son number: {number}</p>;
}

class MyMemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberA: 0,
      numberB: 0,
    };

    this.component = <Son number={this.state.numberA} />;
  }

  handleAddNumberA = () => {
    this.setState((prev) => {
      return {
        numberA: prev.numberA + 1,
      };
    });
  };

  handleAddNumberB = () => {
    this.setState((prev) => {
      return {
        numberB: prev.numberB + 1,
      };
    });
  };

  // 模拟 memo 当props属性改变的时候子组件才渲染
  renderComponent = () => {
    const { numberA } = this.state;
    const { props } = this.component;
    if (props.number === numberA) {
      return this.component;
    }
    this.component = React.cloneElement(this.component, { number: numberA });
    return this.component;
  };

  render() {
    const { numberA, numberB } = this.state;
    return (
      <div>
        {this.renderComponent()}
        <div>
          <p>numberA: {numberA} </p>
          <Button onClick={this.handleAddNumberA}>增加A</Button>
        </div>
        <div>
          <p>numberB: {numberB} </p>
          <Button onClick={this.handleAddNumberB}>增加B</Button>
        </div>
      </div>
    );
  }
}

export default MyMemo;

`