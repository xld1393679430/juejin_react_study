import React, { memo, useEffect, useState, useContext, createContext } from "react";
import { Tabs, Spin } from "antd";

const { TabPane } = Tabs;
const PermissionContext = createContext();

function NoPermission() {
  return <div>您暂时没有权限，请联系管理员开通权限！</div>;
}

function Test({ name }) {
  const { loading, permissionList } = useContext(PermissionContext);
  if (loading) {
    return <Spin />;
  }
  if (permissionList.includes(name)) {
    return <div>我是{name}组件</div>;
  }

  return <NoPermission />;
}

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [permissionList, setPermissionList] = useState([]);
  const [tabs] = useState(["a", "b", "c"]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPermissionList(["b", "c"]);
    }, 1200);
  }, []);

  const handleChange = () => {};

  return (
    <PermissionContext.Provider value={{ loading, permissionList }}>
      <Tabs destroyInactiveTabPane={true} defaultActiveKey={tabs[0]} onChange={handleChange}>
        {tabs.map((item) => {
          return (
            <TabPane tab={`Tab-${item}`} key={item}>
              <Test name={item} />
            </TabPane>
          );
        })}
      </Tabs>
    </PermissionContext.Provider>
  );
};

export default memo(Index);
