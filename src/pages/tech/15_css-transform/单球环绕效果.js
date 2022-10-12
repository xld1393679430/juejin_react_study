import styled, { keyframes } from "styled-components";

const planetRotate = keyframes`
   0% {
    transform:  rotate(45deg) scaleY(0.5) rotate(0);
  }
  100% {
    transform:  rotate(45deg) scaleY(0.5) rotate(360deg);
  }
`;

const selfRotate = keyframes`
     0% {
    transform: rotate(0) scaleY(2) rotate(-45deg);
  }
  100% {
    transform: rotate(-360deg) scaleY(2) rotate(-45deg);
  }
`;

const Wrap = styled.div`
  position: relative;
  display: flex;
  background-image: linear-gradient(180deg, #020205 0%, #170f39 51%, #35247a 95%);
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
  margin: 100px;
`;

const Planet = styled.div`
  position: absolute;
  border: 2px solid #fff;
  transform-style: preserve-3d;
  width: 200px;
  height: 200px;
  transform: scaleY(0.5) rotateZ(45deg);
  border-radius: 50%;
  animation: ${planetRotate} 20s linear infinite;
`;

const Ball = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  left: calc(50% - 25px);
  top: -25px;
  border-radius: 50%;
  background-color: yellowgreen;
  transform: rotateZ(-45deg) scaleY(2);
  animation: ${selfRotate} 20s linear infinite;
`;

const Index = () => {
  return (
    <Wrap>
      <Planet>
        <Ball></Ball>
      </Planet>
    </Wrap>
  );
};

export default Index;
