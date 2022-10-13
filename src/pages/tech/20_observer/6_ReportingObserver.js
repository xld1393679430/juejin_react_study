import { Component, useEffect } from "react";

class Test extends Component {
  UNSAFE_componentWillMount() {
    this.setState({
      num: 2,
    });
  }

  render() {
    return (
      <div>
        <p>我用了过时的API: UNSAFE_componentWillMount</p>
        <p>num: {this.state.num}</p>
      </div>
    );
  }
}

const Inefx = () => {
  useEffect(() => {
    const reportingObserver = new ReportingObserver(
      (reports, observer) => {
        for (const report of reports) {
          console.log(report.body); // 上报
        }
      },
      { types: ["deprecation"], buffered: true }
    );

    reportingObserver.observe();
  }, []);

  return (
    <div>
      <p>ReportingObserver - 用于收集和访问报告</p>
      <p>1,当浏览器运行到过时（deprecation）的 api 的时候，会在控制台打印一个过时的报告, 浏览器还会在一些情况下对网页行为做一些干预（intervention）</p>
      <p>2,比如会把占用 cpu 太多的广告的 iframe 删掉,会在网络比较慢的时候把图片替换为占位图片，点击才会加载, 这些干预都是浏览器做的，会在控制台打印一个报告</p>
      <p>
        3,这些干预或者过时的 api 并不是报错，所以不能用错误监听的方式来拿到，但这些情况对网页 app 来说可能也是很重要的：
        比如我这个网页就是为了展示广告的，但浏览器一干预给我把广告删掉了，我却不知道。如果我知道的话或许可以优化下 iframe。
        比如我这个网页的图片很重要，结果浏览器一干预给我换成占位图了，我却不知道。如果我知道的话可能会优化下图片大小。 所以自然也要监听，所以浏览器提供了 ReportingObserver 的 api
        用来监听这些报告的打印，我们可以拿到这些报告然后上传
      </p>

      <Test />
    </div>
  );
};

export default Inefx;
