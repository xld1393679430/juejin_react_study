import React, { useEffect, useRef } from "react";

function ClickHoc(Component) {
  return function Wrapper(props) {
    const domRef = useRef(null);
    const handleClick = () => {
      alert("我被点击了");
    };
    useEffect(() => {
      const dom = domRef.current;
      dom.addEventListener("click", handleClick);
      return () => {
        dom.removeEventListener("click", handleClick);
      };
    }, []);
    return (
      <div ref={domRef}>
        <Component {...props} />
      </div>
    );
  };
}

class Test extends React.Component {
  render() {
    return <button>点击我会被ClickHoc组件监听</button>;
  }
}


export default ClickHoc(Test)