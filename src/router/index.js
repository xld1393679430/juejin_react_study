import { ToolOutlined } from "@ant-design/icons";
import Home from "@/pages/home";
import Study_10_hoc from "@/pages/study_10_hoc";
import Study_11_render from "@/pages/study_11_render";
import Study_12_render2 from "@/pages/study_12_render2";
import Study_13_large_data from "@/pages/study_13_large_data";
import Study_15_event from "@/pages/study_15_event";
import Node_splite from "@/pages/node_splite";
import Easy_coder from "@/pages/easy_coder";
import Drag from "@/pages/drag";
import SetState from '@/pages/setState'

const routers = [
  {
    key: "/",
    label: "首页",
    icon: <ToolOutlined />,
    component: Home,
  },
  {
    key: "/setState-sync",
    label: "setState同步/异步",
    icon: <ToolOutlined />,
    component: SetState,
  },
  {
    key: "/node_splite",
    label: "node切割文件",
    icon: <ToolOutlined />,
    component: Node_splite,
  },
  {
    key: "/drag",
    label: "Drag",
    icon: <ToolOutlined />,
    component: Drag,
  },
  {
    key: "/easy_coder",
    label: "easy_coder",
    icon: <ToolOutlined />,
    component: Easy_coder,
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
  {
    key: "/study_15_large_data",
    label: "15 原理篇-事件原理",
    icon: <ToolOutlined />,
    component: Study_15_event,
  },
];

export default routers;
