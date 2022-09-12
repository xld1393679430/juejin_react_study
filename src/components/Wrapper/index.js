import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <>
      <p>Wrapper</p>
      <hr />
      <Outlet />
    </>
  );
};

export default Index;
