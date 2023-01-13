import React, { useState, memo } from "react";
import { List, Collapse } from "antd";
import Code from '@/components/Code'
import Demo1, { code } from "./demo1";

const { Panel } = Collapse;

const Index = () => {
  const [list, setList] = useState([
    {
      title: "memo模拟缓存React.element对象",
      codeStr: code,
      component: Demo1,
    },
  ]);

  return (
    <List
      header={<div>渲染控制</div>}
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
