import { ReactComponent as Bank } from "@/imgs/bank.svg";
import { Ttile, FlexCenter } from "./index.style";

const Index = () => {
  return (
    <FlexCenter>
      <Bank width={40} height={40} />
      <Ttile>Home</Ttile>
    </FlexCenter>
  );
};

export default Index;
