import { Button } from "antd";
import { Fragment, useState, useRef } from "react";
import UseStateDemo from "./useState";

const components = {
  UseStateDemo: <UseStateDemo />,
};

const Index = () => {
  const [component, setComponent] = useState(null);
  const handleHooks = (comp) => {
    setComponent(comp);
  };

  return (
    <div>
      <p>实现hooks</p>

     
      <Button onClick={() => handleHooks("UseStateDemo")}>useState</Button>

      <hr />
      {Object.keys(components).map((item) => {
        if (component === item) {
          return <Fragment key={item}>{components[item]}</Fragment>;
        }
        return null;
      })}
      <hr />
    </div>
  );
};

export default Index;
