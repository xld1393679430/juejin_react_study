import { useEffect } from "react";
import { Alert } from 'antd'
import Code from '@/components/Code'
import { myReact, code } from "./myReact";

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
      <Alert message="React.render" type="success"></Alert>
			<Code>{code}</Code>
      <div id="my-react"></div>
    </div>
  );
};

export default Index;
