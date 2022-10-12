import { useEffect } from "react";
import { myReact } from "./myReact";

const Index = () => {
  useEffect(() => {

    const element = (
      <div id="foo">
        <a>bar</a>
        <b></b>
      </div>
    );

    myReact.render(element, document.getElementById("my-react"));
  }, []);

  return (
    <div>
      <p>react</p>

      <div id="my-react"></div>
    </div>
  );
};

export default Index;
