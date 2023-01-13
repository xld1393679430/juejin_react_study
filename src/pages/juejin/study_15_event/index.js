import React, { useState, memo } from "react";
import { List, Collapse } from "antd";
import Code from '@/components/Code'
import Demo1, { code as code1 } from "./demo1";
import Demo2, { code as code2 } from "./demo2";
import Demo3, { code as code3 } from "./demo3";

const { Panel } = Collapse;

const Index = () => {
  const [list, setList] = useState([
    {
      title: "冒泡阶段和捕获阶段",
      codeStr: code1,
      component: Demo1,
    },
    {
      title: "setState",
      codeStr: code2,
      component: Demo2,
    },
    {
      title: "setState",
      codeStr: code3,
      component: Demo3,
    },
  ]);

  return (
    <List
      header={<div>事件原理</div>}
      bordered
      dataSource={list}
      renderItem={(item) => {
        const Component = item.component;
        return (
          <List.Item key={item.path}>
            <Collapse destroyInactivePanel={true} style={{ width: "100%" }}>
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
