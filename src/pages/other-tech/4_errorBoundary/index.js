import React from "react";
import ErrorBoundary from "@/components/ErrorBoundary";

// const Index = () => {
//   return (
//     <ErrorBoundary>
//       {a}
//       <p>
//         <a href="https://mp.weixin.qq.com/s/wAG5N4ncb5nWCRnP10Ayyw" target={'_blank'} rel={'noreferrer'}>造一个 react-error-boundary 轮子</a>
//       </p>
//     </ErrorBoundary>
//   );
// };

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

class Index extends React.Component {

  handleError = (error, stack) => {
  }

  render() {
    return (
      <>
        <ErrorBoundary onError={this.handleError}>
          <Test />
        </ErrorBoundary>

        <hr />

        <ErrorBoundary onError={this.handleError} fallback={<div>出错了</div>}>
          <Test />
        </ErrorBoundary>
      </>
    );
  }
}

export default Index;
