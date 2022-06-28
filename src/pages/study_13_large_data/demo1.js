import React, { useMemo, useState, createRef, Fragment } from "react";
import "./demo1.less";
// 获取随机颜色
function randomColor(opactiy = 0.5) {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgba(${r}, ${g}, ${b}, ${opactiy})`;
}

// 获取随机位置
function getPosition(position) {
  const { width, height } = position;
  return {
    left: Math.ceil(Math.random() * width) + "px",
    top: Math.ceil(Math.random() * height) + "px",
  };
}

function Circle({ position }) {
  const style = useMemo(() => {
    return {
      float: "left",
      width: 20,
      height: 20,
      background: randomColor(),
      ...getPosition(position),
    };
  }, [position]);

  return <div style={style} className="circle"></div>;
}

const MAX_COUNT = 1000;
const EACH_COUNT = 100;

class ContentA extends React.Component {
  state = {
    list: [],
    renderList: [],
    position: { width: 0, height: 0 },
  };

  box = createRef();

  componentDidMount() {
    const { offsetHeight, offsetWidth } = this.box.current;
    const list = new Array(MAX_COUNT).fill(1);
    const index = 0;
    const times = Math.ceil(list.length / EACH_COUNT);
    this.setState(
      {
        position: { height: offsetHeight, width: offsetWidth },
        list,
      },
      () => {
        this.renderList(index, times);
      }
    );
  }

  renderList = (index, times) => {
    if (index > times) {
      return;
    }

    const { renderList } = this.state;

    renderList.push(this.renderNewList(index));

    this.setState({
      renderList,
    });
    /* 用 requestIdleCallback 代替 setTimeout 浏览器空闲执行下一批渲染 */
    requestIdleCallback(() => {
      this.renderList(++index, times);
    });
  };

  renderNewList = (index) => {
    const { list, position } = this.state;
    const newListt = list.slice(index * EACH_COUNT, (index + 1) * EACH_COUNT);

    return (
      <Fragment key={index}>
        {newListt.map((item, index) => (
          <Circle key={index} position={position} />
        ))}
      </Fragment>
    );
  };

  render() {
    const { renderList } = this.state;
    return (
      <div className="clearfix" ref={this.box}>
        {renderList}
      </div>
    );
  }
}

class ContentB extends React.Component {
  state = {
    list: [],
    position: { width: 0, height: 0 },
  };

  box = createRef();

  componentDidMount() {
    const { offsetHeight, offsetWidth } = this.box.current;
    const list = new Array(MAX_COUNT).fill(1);

    this.setState({
      position: { height: offsetHeight, width: offsetWidth },
      list,
    });
  }

  render() {
    const { list, position } = this.state;
    return (
      <div className="clearfix" ref={this.box}>
        {list.map((item, index) => (
          <Circle key={index} position={position} />
        ))}
      </div>
    );
  }
}
/* 控制展示Index */
const Index = () => {
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);
  const handleClickA = () => {
    setShowA(!showA);
  };

  const handleClickB = () => {
    setShowB(!showB);
  };
  return (
    <div>
      <button onClick={handleClickA}>采用时间分片 -- {showA ? "close" : "show"}</button>
      {showA && <ContentA />}

      <button onClick={handleClickB}>未采用时间分片 -- {showB ? "close" : "show"}</button>
      {showB && <ContentB />}
    </div>
  );
};

export default Index;
