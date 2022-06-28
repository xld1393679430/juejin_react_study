import React, { useState, memo } from "react";
import { List, Collapse } from "antd";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import http from "@/http";
import Demo1 from "./demo1";

const { Panel } = Collapse;

const Index = () => {
  const [list, setList] = useState([
    {
      title: "React.lazy和Suspense & getDerivedStateFromError",
      codeStr: "",
      path: "src/pages/study_12_render2/demo1.js",
      component: Demo1,
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
      header={<div>渲染调优</div>}
      bordered
      dataSource={list}
      renderItem={(item) => {
        const Component = item.component;
        return (
          <List.Item>
            <Collapse style={{ width: "100%" }} destroyInactivePanel={true} onChange={() => handleChange(item)}>
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
