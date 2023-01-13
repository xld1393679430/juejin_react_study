import React, { useState, memo } from "react";
import { List, Collapse } from "antd";
import Code from '@/components/Code'
import Demo1, { code as code1 } from "./demo1";
import Demo2, { code as code2 } from "./demo2";


const { Panel } = Collapse;

const Index = () => {
  const [list, setList] = useState([
    {
      title: "时间分片",
      codeStr: code1,
      component: Demo1,
    },
    {
      title: "虚拟列表",
      codeStr: code2,
      component: Demo2,
    },
  ]);

  return (
    <List
      header={<div>渲染调优</div>}
      bordered
      dataSource={list}
      renderItem={(item) => {
        const Component = item.component;
        return (
          <List.Item>
            <Collapse style={{ width: "100%" }} destroyInactivePanel={true}>
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
