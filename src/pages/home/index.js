import { ReactComponent as Bank } from "@/imgs/bank.svg";
import { useEffect, useRef } from "react";
import { Ttile, FlexCenter } from "./index.style";
import TrafficItem from './TrafficItem'
import "./index.css";

const Index = () => {
  const list = useRef(null);

  useEffect(() => {
    
   
  }, []);

  return (
    <FlexCenter>
      <Bank width={40} height={40} />
      <Ttile>Home</Ttile>
      <div ref={list} className="traffic">
        {['red', 'green', 'yellow'].map((item, index) => <TrafficItem key={item} title={item} index={index} time={ 5000 }  />)}
      </div>
    </FlexCenter>
  );
};

export default Index;
