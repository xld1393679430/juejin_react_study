import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import React, { useState } from "react";
import routers from "../../router/index";
import "./index.less";

const { Header, Sider, Content } = Layout;

const LayoutWrapper = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);
  let navigate = useNavigate();
  let location = useLocation();

  return (
    <Layout id="layout-root">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[location.pathname || routers[0].key]}
          items={routers}
          onClick={(info) => {
            navigate(info.key);
          }}
        />
      </Sider>
      <Layout id="layout-content">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: "trigger",
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            padding: "24px 16px",
            overflow: "auto",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutWrapper;
