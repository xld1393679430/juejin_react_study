import React, { useState, memo } from "react";
import { List, Collapse } from "antd";
import Code from '@/components/Code'
import http from "@/http";
import Demo1 from "./demo1.jsx";
import Demo2 from "./demo2.jsx";

const { Panel } = Collapse;

const Index = () => {
  const [list, setList] = useState([
    {
      title: "node切割文件",
      codeStr: "",
      path: "src/pages/node_splite/demo1.jsx",
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
    <>
      <Demo1 />
      <Demo2 />
    </>
  )

  return (
    <List
      header={<div>node切割文件</div>}
      bordered
      dataSource={list}
      renderItem={(item) => {
        const Component = item.component;
        return (
          <List.Item key={item.path}>
            <Collapse destroyInactivePanel={true} style={{ width: "100%" }} onChange={() => handleChange(item)}>
              <Panel header={item.title} key={item.path}>
                <Component />
                <Code>{item.codeStr}</Code>
              </Panel>
            </Collapse>
          </List.Item>
        );
      }}
    />
  );
};

export default memo(Index);
