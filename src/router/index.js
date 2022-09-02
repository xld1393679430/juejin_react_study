import { ToolOutlined } from "@ant-design/icons";
import Home from "@/pages/home";
import Study_10_hoc from "@/pages/study_10_hoc";
import Study_11_render from "@/pages/study_11_render";
import Study_12_render2 from "@/pages/study_12_render2";
import Study_13_large_data from "@/pages/study_13_large_data";
import Study_15_event from "@/pages/study_15_event";

// 其他技术杂谈
import Node_splite from "@/pages/other-tech/node_splite";
import Easy_coder from "@/pages/other-tech/easy_coder";
import Drag from "@/pages/other-tech/drag";
import SetState from "@/pages/other-tech/setState";
import ReactDocgen from "@/pages/other-tech/react-docgen";
import ReactRef from "@/pages/other-tech/react-ref";
import Bytemd from "@/pages/other-tech/bytemd";
import ErrorBoundary from "@/pages/other-tech/errorBoundary";
import WithErrorBoundary from "@/pages/other-tech/errorBoundary/test-with";
import SpeechRecognition from "@/pages/other-tech/speechRecognition";
import TestHooks from "@/pages/other-tech/hooks";
import Fps from "@/pages/other-tech/fps";

const routers = [
  {
    key: "",
    label: "首页",
    icon: <ToolOutlined />,
    component: Home,
  },
  {
    key: "other-tech",
    label: "技术杂谈",
    icon: <ToolOutlined />,
    children: [
      {
        key: "react-ref",
        label: "react-ref",
        icon: <ToolOutlined />,
        component: ReactRef,
      },
      {
        key: "react-docgen",
        label: "react-docgen",
        icon: <ToolOutlined />,
        component: ReactDocgen,
      },
      {
        key: "setState-sync",
        label: "setState同步/异步",
        icon: <ToolOutlined />,
        component: SetState,
      },
      {
        key: "node_splite",
        label: "node切割文件",
        icon: <ToolOutlined />,
        component: Node_splite,
      },
      {
        key: "drag",
        label: "拖拽",
        icon: <ToolOutlined />,
        component: Drag,
      },
      {
        key: "easy_coder",
        label: "easy_coder",
        icon: <ToolOutlined />,
        component: Easy_coder,
      },
      {
        key: "bytemd",
        label: "bytemd 编辑器",
        icon: <ToolOutlined />,
        component: Bytemd,
      },
      {
        key: "errorBoundary",
        label: "ErrorBoundary",
        icon: <ToolOutlined />,
        component: ErrorBoundary,
      },
      {
        key: "withErrorBoundary",
        label: "ErrorBoundary 高阶函数",
        icon: <ToolOutlined />,
        component: WithErrorBoundary,
      },
      {
        key: "speechRecognition",
        label: "SpeechRecognition 语言识别",
        icon: <ToolOutlined />,
        component: SpeechRecognition,
      },
      {
        key: "testHooks",
        label: "Hooks",
        icon: <ToolOutlined />,
        component: TestHooks,
      },
      {
        key: "Fps",
        label: "Fps",
        icon: <ToolOutlined />,
        component: Fps,
      },
      
    ],
  },
  {
    key: "study_10_hoc",
    label: "10 基础篇-高阶组件",
    icon: <ToolOutlined />,
    component: Study_10_hoc,
  },
  {
    key: "study_11_render",
    label: "11 优化篇-渲染控制",
    icon: <ToolOutlined />,
    component: Study_11_render,
  },
  {
    key: "study_12_render2",
    label: "12 优化篇-渲染调优",
    icon: <ToolOutlined />,
    component: Study_12_render2,
  },
  {
    key: "study_13_large_data",
    label: "13 优化篇-处理海量数据",
    icon: <ToolOutlined />,
    component: Study_13_large_data,
  },
  {
    key: "study_15_large_data",
    label: "15 原理篇-事件原理",
    icon: <ToolOutlined />,
    component: Study_15_event,
  },
];

export default routers;
