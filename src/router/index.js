import { ToolOutlined } from "@ant-design/icons";
import Home from "../pages/home";
import Study_10_hoc from "../pages/study_10_hoc";
import Study_11_render from "../pages/study_11_render";
import Study_12_render2 from "../pages/study_12_render2";
import Study_13_large_data from "../pages/study_13_large_data";

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
  {
    key: "/study_12_render2",
    label: "12 优化篇-渲染调优",
    icon: <ToolOutlined />,
    component: Study_12_render2,
  },
  {
    key: "/study_13_large_data",
    label: "13 优化篇-处理海量数据",
    icon: <ToolOutlined />,
    component: Study_13_large_data,
  },
];

export default routers;
