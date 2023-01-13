import React from "react";
import { Button } from "antd";

function handleToast() {
  alert('handleToast')
}

class Index extends React.Component {
  componentDidMount() {
    const aa = <Button onClickCapture={this.handleDomClick}>Button 1</Button>
  }
  
  handleFatherClick = () => {
    alert("我是父级冒泡的触发");
  };
  handleDomClick = () => {
    alert("我是真正点击的元素触发");
  };

  handleFatherClick2 = () => {
    alert("handleFatherClick2");
  };

  handleDomClick2 = (e) => {
    e.stopPropagation(); // 阻止冒泡
    e.preventDefault(); // 阻止默认行为
    alert("Button 2被点击了， 阻止冒泡 导致handleFatherClick2不会执行");
  };
  render() {
    return (
      <>
        <div onClick={this.handleFatherClick}>
          <Button onClickCapture={this.handleDomClick}>Button 1</Button>
        </div>

        <div onClick={this.handleFatherClick2}>
          <Button onClickCapture={this.handleDomClick2}>Button 2</Button>
        </div>
      </>
    );
  }
}

export default Index;

export const code = `
import React from "react";
import { Button } from "antd";

function handleToast() {
  alert('handleToast')
}

class Index extends React.Component {
  componentDidMount() {
    const aa = <Button onClickCapture={this.handleDomClick}>Button 1</Button>
  }
  
  handleFatherClick = () => {
    alert("我是父级冒泡的触发");
  };
  handleDomClick = () => {
    alert("我是真正点击的元素触发");
  };

  handleFatherClick2 = () => {
    alert("handleFatherClick2");
  };

  handleDomClick2 = (e) => {
    e.stopPropagation(); // 阻止冒泡
    e.preventDefault(); // 阻止默认行为
    alert("Button 2被点击了， 阻止冒泡 导致handleFatherClick2不会执行");
  };
  render() {
    return (
      <>
        <div onClick={this.handleFatherClick}>
          <Button onClickCapture={this.handleDomClick}>Button 1</Button>
        </div>

        <div onClick={this.handleFatherClick2}>
          <Button onClickCapture={this.handleDomClick2}>Button 2</Button>
        </div>
      </>
    );
  }
}

export default Index;

`