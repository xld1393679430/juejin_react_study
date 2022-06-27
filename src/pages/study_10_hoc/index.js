import React, { useState } from "react";
import { List, Collapse } from "antd";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import http from "@/http";

// const path = require('path')
const { Panel } = Collapse;

const Index = () => {
  const [list, setList] = useState([
    {
      title: "1，渲染劫持",
      codeStr: "",
      path: "src/pages/study_10_hoc/demo1.js",
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
        return (
          <List.Item>
            <Collapse style={{ width: "100%" }} onChange={() => handleChange(item)}>
              <Panel header={item.title} key={item.path}>
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

export default Index;
