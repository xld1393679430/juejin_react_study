import React from "react";
import { Button } from "antd";
import http from "@/http";

class Index extends React.Component {
  
  handleWorker = async () => {
    const result = await http("/api/code_split");
  };

  render() {
    return (
      <>
        <Button onClick={this.handleWorker}>通过node方式切割json</Button>
      </>
    );
  }
}

export default Index;
