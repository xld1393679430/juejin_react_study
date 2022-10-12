import React from "react";
import { Button } from "antd";

class Index extends React.Component {
  handleShowCount = () => {
    setTimeout(() => {
      alert(this.props.count);
    }, 2000);
  };

  render() {
    const { count } = this.props;
    return (
      <div>
        <h1>index</h1>
        <p>count: {count}</p>
        <Button onClick={this.handleShowCount}>showCount</Button>
      </div>
    );
  }
}

export default Index;
