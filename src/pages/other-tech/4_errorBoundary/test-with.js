import React from "react";
import withErrorBoundary from "@/components/ErrorBoundary/withErrorBoundary";

class Test extends React.Component {
  render() {
    const a = undefined;
    console.log(a.b);
    return (
      <div>
        <p>
          <a href="https://mp.weixin.qq.com/s/wAG5N4ncb5nWCRnP10Ayyw" target={"_blank"} rel={"noreferrer"}>
            造一个 react-error-boundary 轮子
          </a>
        </p>
        <div>content</div>
      </div>
    );
  }
}

const TestWithErrorBoundary = withErrorBoundary(Test)

export default TestWithErrorBoundary;