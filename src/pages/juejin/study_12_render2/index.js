import React, { useState, memo } from "react";
import { List, Collapse } from "antd";
import Code from '@/components/Code'
import http from "@/http";
import Demo1 from "./demo1";

const { Panel } = Collapse;

const Index = () => {
  const [list, setList] = useState([
    {
      title: "React.lazy和Suspense & getDerivedStateFromError",
      codeStr: "",
      path: "src/pages/juejin/study_12_render2/demo1.js",
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
