import React from "react";
import { Button } from "antd";
import json from "@/package.json";

/**
 * 前端方式开启多线程处理json
 */
class Index extends React.Component {

  handleWorker = () => {
    let data1 = {
      __render__: "container",
    };
    let data2 = {
      __render__: "baseComponent",
    };
    Object.keys(json).map((key) => {
      const value = json[key];
      if (typeof value === "object") {
        data1[key] = value;
      } else {
        data2[key] = value;
      }
      return null;
    });

    [data1, data2].map((item) => {
      const worker = new Worker(`./${item.__render__}.js`, { name: item.__render__ });
      worker.postMessage({ json: item });
      worker.addEventListener("message", function (e) {
        const { json, finished } = e.data;
        if (finished) {
          worker.terminate();
        }
      });
      return null;
    });
  };

  render() {
    return (
      <>
        <Button onClick={this.handleWorker}>开启多线程处理json</Button>
      </>
    );
  }
}

export default Index;
