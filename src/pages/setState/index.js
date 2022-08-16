import React, { useState, memo } from "react";
import { List, Collapse, Button } from "antd";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import http from "@/http";
import CountFn from "./count_fn";
import CountClass from "./count_class";

// const path = require('path')
const { Panel } = Collapse;

const Index = () => {
  const [list, setList] = useState([
    {
      title: "1,count_fn",
      codeStr: "",
      path: "src/pages/setState/count_fn.js",
      component: CountFn,
    },
    {
      title: "2,count_class",
      codeStr: "",
      path: "src/pages/setState/count_class.js",
      component: CountClass,
    },
  ]);
  const [count, setCount] = useState(0);

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
    <div>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
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
                  <Component count={count} />
                  <SyntaxHighlighter language="javascript" showLineNumbers={true} wrapLines={true} style={vscDarkPlus}>
                    {item.codeStr}
                  </SyntaxHighlighter>
                </Panel>
              </Collapse>
            </List.Item>
          );
        }}
      />
    </div>
  );
};

export default memo(Index);
