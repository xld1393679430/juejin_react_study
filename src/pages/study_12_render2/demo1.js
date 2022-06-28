import React, { lazy, Suspense } from "react";
import { Spin } from "antd";

function Son() {
  return (
    <div>
      <p>Son</p>
    </div>
  );
}

const LazySon = lazy(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random > 0.8) {
        resolve({
          default: (props) => <Son {...props} />,
        });
      } else {
        reject({
          message: "发生了错误，请查看代码",
        });
      }
    }, 2000);
  });
});

class Index extends React.Component {
  state = {
    error_message: null
  }

  static getDerivedStateFromError({ message }) {
    return {
      error_message: message,
    };
  }

  render() {
    const { error_message } = this.state;
    return <Suspense fallback={<Spin />}>{error_message ? error_message : <LazySon />}</Suspense>;
  }
}

export default Index;
