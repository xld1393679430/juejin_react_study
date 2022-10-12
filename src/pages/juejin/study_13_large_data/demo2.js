import React from "react";
import "./demo2.less";

class Content extends React.Component {
  state = {
    list: [],
  };

  componentDidMount() {
    const list = new Array(200).fill(1);
    this.setState({
      list,
    });
  }

  render() {
    const { list } = this.state;
    return (
      <div className="bigData_index" ref={this.box}>
        {list.map((item, index) => (
          <div key={index} style={{ lineHeight: "44px", borderBottom: "1px solid skyblue" }}>
            {index}
          </div>
        ))}
      </div>
    );
  }
}

function VirtualList() {
  const [dataList, setDataList] = React.useState([]); /* 保存数据源 */
  const [position, setPosition] = React.useState([0, 0]); /* 截取缓冲区 + 视图区索引 */
  const scroll = React.useRef(null); /* 获取scroll元素 */
  const box = React.useRef(null); /* 获取元素用于容器高度 */
  const context = React.useRef(null); /* 用于移动视图区域，形成滑动效果。 */
  const scrollInfo = React.useRef({
    height: 500 /* 容器高度 */,
    bufferCount: 8 /* 缓冲区个数 */,
    itemHeight: 60 /* 每一个item高度 */,
    renderCount: 0 /* 渲染区个数 */,
  });

  React.useEffect(() => {
    const height = box.current.offsetHeight;
    const { itemHeight, bufferCount } = scrollInfo.current;
    const renderCount = Math.ceil(height / itemHeight) + bufferCount;
    scrollInfo.current = { renderCount, height, bufferCount, itemHeight };
    const dataList = new Array(1000).fill(1).map((item, index) => index + 1);
    setDataList(dataList);
    setPosition([0, renderCount]);
  }, []);

  const handleScroll = () => {
    const { scrollTop } = scroll.current;
    const { itemHeight, renderCount } = scrollInfo.current;
    const currentOffset = scrollTop - (scrollTop % itemHeight);
    const start = Math.floor(scrollTop / itemHeight);
    context.current.style.transform = `translate3d(0, ${currentOffset}px, 0)`; /* 偏移，造成下滑效果 */
    const end = Math.floor(scrollTop / itemHeight + renderCount + 1);
    if (end !== position[1] || start !== position[0]) {
      /* 如果render内容发生改变，那么截取  */
      setPosition([start, end]);
    }
  };
  const { itemHeight, height } = scrollInfo.current;
  const [start, end] = position;
  const renderList = dataList.slice(start, end); /* 渲染区间 */
  console.log("渲染区间", position);

  return (
    <div className="list_box" ref={box}>
      <div className="scroll_box" style={{ height: height + "px" }} onScroll={handleScroll} ref={scroll}>
        <div className="scroll_hold" style={{ height: `${dataList.length * itemHeight}px` }} />
        <div className="context" ref={context}>
          {renderList.map((item, index) => (
            <div className="list" key={index}>{`Item-#${index}`}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* 控制展示Index */
const Index = () => {
  const [showA, setShowA] = React.useState(false);
  const [showB, setShowB] = React.useState(false);
  const handleClickA = () => {
    setShowA(!showA);
  };

  const handleClickB = () => {
    setShowB(!showB);
  };
  return (
    <div>
      <button onClick={handleClickA}>采用虚拟列表 -- {showA ? "close" : "show"}</button>
      {showA && <VirtualList />}

      <button onClick={handleClickB}>未采用虚拟列表 -- {showB ? "close" : "show"}</button>
      {showB && <Content />}
    </div>
  );
};

export default Index;
