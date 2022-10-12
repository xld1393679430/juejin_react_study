import { Alert } from "antd";
import "./index.css";

const Index = () => {
  return (
    <div className="container">
      <Alert message="有点问题" type="info" />
      <ul className="cards">
        <li className="card">
          <p className="title">Flower</p>
          <p className="content">The flowers mingle to form a blaze of color.</p>
        </li>
        <li className="card">
          <p className="title">Sunset</p>
          <p className="content">The sunset glow tinted the sky red.</p>
        </li>
        <li className="card">
          <p className="title">Plain</p>
          <p className="content">The winds came from the north, across the plains, funnelling down the valley. </p>
        </li>
      </ul>
    </div>
  );
};

export default Index;
