import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <p>Wrapper</p>
      <hr />
      <Outlet />
    </div>
  );
};

export default Index;
