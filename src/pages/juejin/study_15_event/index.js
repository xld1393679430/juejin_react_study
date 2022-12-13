import React, { useState, memo } from "react";
import { List, Collapse } from "antd";
import Code from '@/components/Code'
import http from "@/http";
import Demo1 from "./demo1";
import Demo2 from "./demo2";
import Demo3 from "./demo3";

const { Panel } = Collapse;

const Index = () => {
  const [list, setList] = useState([
    {
      title: "冒泡阶段和捕获阶段",
      codeStr: "",
      path: "src/pages/juejin/study_15_event/demo1.js",
      component: Demo1,
    },
    {
      title: "setState",
      codeStr: "",
      path: "src/pages/juejin/study_15_event/demo2.js",
      component: Demo2,
    },
    {
      title: "setState",
      codeStr: "",
      path: "src/pages/juejin/study_15_event/demo3.js",
      component: Demo3,
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
      header={<div>事件原理</div>}
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
