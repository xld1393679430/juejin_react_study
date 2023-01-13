import React, { useState, memo } from "react";
import { List, Collapse } from "antd";
import Code from '@/components/Code'
import Demo1, { code as code1 } from "./demo1";
import Demo2, { code as code2 } from "./demo2";
import Demo3, { code as code3 } from "./demo3";
import Demo4, { code as code4 } from "./demo4";

const { Panel } = Collapse;

const Index = () => {
  const [list, setList] = useState([
    {
      title: "1，渲染劫持",
      codeStr: code1,
      component: Demo1,
    },
    {
      title: "2,修改渲染树",
      codeStr: code2,
      component: Demo2,
    },
    {
      title: "3,事件监控",
      codeStr: code3,
      component: Demo3,
    },
    {
      title: "4,HOC权限控制",
      codeStr: code4,
      component: Demo4,
    },
  ]);

  return (
    <List
      header={<div>高阶组件</div>}
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
