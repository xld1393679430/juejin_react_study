import "./index.css";

const Index = () => {
  return (
    <div>
      <p>
        <a href="https://zhuanlan.zhihu.com/p/473485760" target="_blank" rel="noreferrer">
          [来源]突破限制，CSS font-variation 可变字体的魅力
        </a>
      </p>
      <hr />
      <ul>
        {
          Array(10).fill(null).map((_, index) => <li key={index} className="txt" style={{animationDelay: `${(index - 1) * -0.125}s`}}>AnyBody</li>)
        }
      </ul>
    </div>
  );
};

export default Index;
