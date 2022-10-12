import React from "react";
import { Button } from "antd";

class Index extends React.Component {
  state = {
    count1: 0,
    count2: 100,
  };

  handleClick = () => {
    const { count1, count2 } = this.state;
    // this.setState({
    //   count1: count1+1,
    //   count2: count2 + 1
    // });

    // setTimeout(() => {
    //   this.setState({
    //     count1: count1 + 1,
    //     count2: count2 + 1,
    //   });
    // });

    // this.setState({
    //   count1: count1 + 1,
    // });
    // setTimeout(() => {
    //   this.setState({
    //     count2: count2 + 1,
    //   });
    // });

    setTimeout(() => {
      this.setState({
        count1: count1 + 1,
      });
      setTimeout(() => {
        this.setState({
          count2: count2 + 1,
        });
      });
    });
  };

  render() {
    const { count1, count2 } = this.state;
    return (
      <div>
        <Button onClick={this.handleClick}>
          按钮2--{count1}--{count2}
        </Button>
      </div>
    );
  }
}

export default Index;
