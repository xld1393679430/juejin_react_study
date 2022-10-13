import { Divider } from "antd";
import "./index.css";

const Index = () => {
  return (
    <div>
      <p>
        <a href="https://mp.weixin.qq.com/s?__biz=Mzg2MDU4MzU3Nw==&mid=2247491371&idx=1&sn=f0c87cdbce78fedcef2d616c1da0b340&chksm=ce257cddf952f5cbfe4f735f7f6c801357c8a8a2772167f6ccce910db6fc5494189414e08817&token=1008676742&lang=zh_CN#rd">
          【来源】奇妙的CSS mask（兼容性不太好 慎用）
        </a>
      </p>

      <div>
        <p>mask 遮罩 和 css伪类遮罩区别还是比较大的</p>
        <div className="img01"></div>
        <div className="img01_after"></div>
      </div>
      <Divider />

      <div>
        <p>mask 线性渐变</p>
        <div className="img02"></div>
      </div>
    </div>
  );
};

export default Index;
