import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import React, { useState } from "react";
import routers from "../../router/index";
import "./index.less";

const { Header, Sider, Content } = Layout;

const LayoutWrapper = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const keys = location.pathname.split("/");

  return (
    <Layout id="layout-root">
      <Sider width={260} trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <span class="logoText">Web Admin</span>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[keys[keys.length - 1]]}
          defaultOpenKeys={[keys[keys.length - 2]]}
          items={routers}
          onClick={(info) => {
            const path = info.keyPath.reverse().join("/");
            navigate(path);
          }}
          style={{ overflowY: "scroll", height: "inherit" }}
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
