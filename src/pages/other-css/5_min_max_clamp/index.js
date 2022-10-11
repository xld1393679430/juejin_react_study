import "./index.css";

const Index = () => {
  return (
    <div>
      <p>
        <span>CSS 解决方案：数学函数之 min、max、clamp</span>
        <span style={{color: 'red'}}>下面两种等效</span>
      </p>
      <hr />
      <p className="c1">该文字随窗口大小改变 最大26px 最小12px (font-size: max(12px, min(3.75vw, 26px))) </p>
      <hr />
      <p className="c2">该文字随窗口大小改变 最大26px 最小12px (font-size: clamp(12px, 3.75vw, 26px))</p>
    </div>
  );
};

export default Index;
