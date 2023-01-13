import React from "react";

// 渲染劫持
const HiJackHOC = (WrapComponent) => {
  return class extends WrapComponent {
    constructor(props) {
      super();
    }

    render() {
      if (this.props.show) {
        return super.render();
      } else {
        return <div>占位</div>;
      }
    }
  };
};

const IndexFn = () => {
  return <div>study_10_hoc Function</div>;
};

class IndexClass extends React.Component {
  render() {
    return <div>study_10_hoc Class</div>;
  }
}

export default HiJackHOC(IndexClass);

export const code = `
import React from "react";

// 渲染劫持
const HiJackHOC = (WrapComponent) => {
  return class extends WrapComponent {
    constructor(props) {
      super();
    }

    render() {
      if (this.props.show) {
        return super.render();
      } else {
        return <div>占位</div>;
      }
    }
  };
};

const IndexFn = () => {
  return <div>study_10_hoc Function</div>;
};

class IndexClass extends React.Component {
  render() {
    return <div>study_10_hoc Class</div>;
  }
}  
`