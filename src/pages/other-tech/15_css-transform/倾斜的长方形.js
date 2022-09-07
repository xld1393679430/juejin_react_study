import styled from "styled-components";

const Rectangle1 = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 50px;
  border: 2px solid skyblue;
  transform: rotate(45deg) scaleX(0.5); // transform 中传入的效果是有先后执行顺序的效果上看，可以理解为后传入的先执行
`;

const Rectangle2 = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 50px;
  border: 2px solid skyblue;
  transform: scaleX(0.5) rotate(45deg) ; // transform 中传入的效果是有先后执行顺序的效果上看，可以理解为后传入的先执行
`;
const Index = () => {
  return (
    <div>
      <p>长方形</p>
      <Rectangle1 />

      <Rectangle2 />
    </div>
  );
};

export default Index;
