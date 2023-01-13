import React, { useState, memo } from "react";
import { List, Collapse } from "antd";
import Code from '@/components/Code'
import Demo1, { code } from "./demo1";

const { Panel } = Collapse;

const Index = () => {
  const [list, setList] = useState([
    {
      title: "React.lazy和Suspense & getDerivedStateFromError",
      codeStr: code,
      component: Demo1,
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
