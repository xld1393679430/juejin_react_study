// 使用SVG方式引入更好
// 在JavaScript中使用SVG，实现快速、单一渲染的性能
import { ReactComponent as Bank } from "@/imgs/bank.svg";
import Bank1 from "@/imgs/bank.svg";
import { Ttile, FlexCenter } from './index.style'

const Index = () => {
  return (
    <FlexCenter>
      <Bank width={40} height={40} />
      {/* <img src={Bank1} alt="bank" width={40} height={40} /> */}
      {/* <img src={"http://temp.xld-gsfm.top/bank.svg"} alt="bank" width={40} height={40} /> */}
      <Ttile>Home 奥术大师大所大奥术大师大所大奥术大师大所大奥术大师大所大奥术大师大所大奥术大师大所大奥术大师大所大奥术大师大所大奥术大师大所大</Ttile>

    </FlexCenter>
  );
};

export default Index;
