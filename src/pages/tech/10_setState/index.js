import React, { useState, memo } from "react";
import { List, Collapse, Button } from "antd";
import Code from '@/components/Code'
import CountFn, { code as code1 } from "./count_fn";
import CountClass, { code as code2 } from "./count_class";

const { Panel } = Collapse;

const Index = () => {
  const [list, setList] = useState([
    {
      title: "1,count_fn",
      codeStr: code1,
      component: CountFn,
    },
    {
      title: "2,count_class",
      codeStr: code2,
      component: CountClass,
    },
  ]);
  const [count, setCount] = useState(0);

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
              <Collapse destroyInactivePanel={true} style={{ width: "100%" }}>
                <Panel header={item.title} key={item.path}>
                  <Component count={count} />
                  <Code>{item.codeStr}</Code>
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
