import React from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";
import TimeSplite from "../study_13_large_data/demo1";

// const jsonx = require('jsonx')
class Index extends React.Component {
  state = {
    MyComponent: null,
  };
  componentDidMount() {
    // const aa = React.cloneElement(TimeSplite)
    // const bb = jsonx.getReactElement(TimeSplite)
    // const cc = jsonx.default
    const component = <TimeSplite />;
    this.setState({
      MyComponent: component?._self?._reactInternals,
    });
    console.log(component, component?._self?._reactInternals, 222);
  }
  render() {
    const { MyComponent } = this.state;
    return (
      <>
        <Button>Button 1</Button>
        {/* {React.createElement()} */}
        {/* <MyComponent /> */}
      </>
    );
  }
}

export default Index;
