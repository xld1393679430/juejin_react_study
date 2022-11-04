import React, { useState, memo } from "react";
import { List, Collapse } from "antd";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import http from "@/http";
import Demo1 from "./demo1";
import Demo2 from "./demo2";
import Demo3 from "./demo3";
import Demo4 from "./demo4";

// const path = require('path')
const { Panel } = Collapse;

const Index = () => {
  const [list, setList] = useState([
    {
      title: "1，渲染劫持",
      codeStr: "",
      path: "src/pages/juejin/study_10_hoc/demo1.js",
      component: Demo1,
    },
    {
      title: "2,修改渲染树",
      codeStr: "",
      path: "src/pages/juejin/study_10_hoc/demo2.js",
      component: Demo2,
    },
    {
      title: "3,事件监控",
      codeStr: "",
      path: "src/pages/juejin/study_10_hoc/demo3.js",
      component: Demo3,
    },
    {
      title: "4,HOC权限控制",
      codeStr: "",
      path: "src/pages/juejin/study_10_hoc/demo4.js",
      component: Demo4,
    },
  ]);

  const handleChange = async (item) => {
    if (!item.codeStr) {
      const codeStr = await http("/api/js_review", {
        params: { path: item.path },
      });
      const index = list.findIndex((i) => i.path === item.path);
      list[index].codeStr = codeStr;
      setList([...list]);
    }
  };

  return (
    <List
      header={<div>高阶组件</div>}
      bordered
      dataSource={list}
      renderItem={(item) => {
        const Component = item.component;
        return (
          <List.Item key={item.path}>
            <Collapse destroyInactivePanel={true} style={{ width: "100%" }} onChange={() => handleChange(item)}>
              <Panel header={item.title} key={item.path}>
                <Component />
                <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                  {item.codeStr}
                </SyntaxHighlighter>
              </Panel>
            </Collapse>
          </List.Item>
        );
      }}
    />
  );
};

export default memo(Index);
