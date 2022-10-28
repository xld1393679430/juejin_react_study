import "./index.css";

const Index = () => {
  return (
    <div className="container">
      <h1 style={{color: '#fff'}}>css 烟花效果</h1>

      <div className="fireworks" style={{ left: "15%", top: "5%" }}></div>
      <div className="fireworks" style={{ left: "30%", top: "13%", animationDelay: '-0.4s' }}></div>
      <div className="fireworks" style={{ left: "5%", top: "23%", animationDelay: '-1.7s' }}></div>
      <div className="fireworks" style={{ left: "45%", top: "8%", animationDelay: '-3.1s' }}></div>
    </div>
  );
};

export default Index;
