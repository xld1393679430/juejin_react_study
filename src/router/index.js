import { ToolOutlined } from "@ant-design/icons";
import Home from "../pages/home";
import Study_10_hoc from "../pages/study_10_hoc";
import Study_11_render from "../pages/study_11_render";

const routers = [
  {
    key: "/",
    label: "首页",
    icon: <ToolOutlined />,
    component: Home,
  },
  {
    key: "/study_10_hoc",
    label: "10 基础篇-高阶组件",
    icon: <ToolOutlined />,
    component: Study_10_hoc,
  },
  {
    key: "/study_11_render",
    label: "11 优化篇-渲染控制",
    icon: <ToolOutlined />,
    component: Study_11_render,
  },
];

export default routers;
