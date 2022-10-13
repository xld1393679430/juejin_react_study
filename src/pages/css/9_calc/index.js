import "./index.css";

const Index = () => {
  const dots = [1, 2, 3, 4, 5]
  return (
    <div>
      <p>
        <a href="https://blog.csdn.net/qiwoo_weekly/article/details/124357897">【来源】现代 CSS 解决方案：CSS 数学函数之 calc</a>
      </p>

      <div className="g-container">
        {dots.map((_, index) => (
          <div key={index} className="g-item" style={{ "--delay": 0.6 * index }}></div>
        ))}
      </div>
    </div>
  );
};

export default Index;
