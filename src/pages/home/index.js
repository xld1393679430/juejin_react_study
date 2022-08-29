// 使用SVG方式引入更好
// 在JavaScript中使用SVG，实现快速、单一渲染的性能
import { ReactComponent as Bank } from "@/imgs/bank.svg";
import Bank1 from "@/imgs/bank.svg";
import { Ttile, FlexCenter } from "./index.style";
import { useEffect } from "react";
import http from "@/http";

const Index = () => {
  useEffect(() => {
    // getImage();
  }, []);

  const getImage = async () => {
    const image = "https://i3.qumiaodong.com/1b154364a59a4d4c/1811436da7/434c103bf2d8151f/404a1032f5d5151c4c0f1a3bf6a10e7f.jpg";
    const result = await http("/api/downloadImage", {
      params: { url: image },
    });

    console.log(result, 222)
    // const blob = new Blob([result], { type: "image/*" });
    // const url = window.URL.createObjectURL(blob);


    // console.log(result, url, 222)
    function handleDownload(url, filename = "1.jpg") {
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.target = "__blank";

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    // handleDownload(url);

  };

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
