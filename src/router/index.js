import { ToolOutlined } from "@ant-design/icons";
import Home from "@/pages/home";
import Study_10_hoc from "@/pages/study_10_hoc";
import Study_11_render from "@/pages/study_11_render";
import Study_12_render2 from "@/pages/study_12_render2";
import Study_13_large_data from "@/pages/study_13_large_data";
import Study_15_event from "@/pages/study_15_event";

// 其他技术杂谈
import Bytemd from "@/pages/other-tech/1_bytemd";
import Drag from "@/pages/other-tech/2_drag";
import Easy_coder from "@/pages/other-tech/3_easy_coder";
import ErrorBoundary from "@/pages/other-tech/4_errorBoundary";
import WithErrorBoundary from "@/pages/other-tech/4_errorBoundary/test-with";
import Fps from "@/pages/other-tech/5_fps";
import TestHooks from "@/pages/other-tech/6_hooks";
import TestHooksCustom from "@/pages/other-tech/6_hooks-custom";
import Node_splite from "@/pages/other-tech/7_node_splite";
import ReactDocgen from "@/pages/other-tech/8_react-docgen";
import ReactRef from "@/pages/other-tech/9_react-ref";
import SetState from "@/pages/other-tech/10_setState";
import SpeechRecognition from "@/pages/other-tech/11_speechRecognition";
import PageLifecycle from "@/pages/other-tech/12_pageLifecycle";
import Immutable from "@/pages/other-tech/13_immutable";
import MyReact from "@/pages/other-tech/14_myReact";
import CssTransform from "@/pages/other-tech/15_css-transform";

// React相关
import Memo from "@/pages/other-react/1_memo";

// PPT设计
import RevealJs from "@/pages/ppt/1_reveal";

// css相关
import Sticky from '@/pages/other-css/1_sticky'
import Filter from '@/pages/other-css/2_filter'

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
        key: "bytemd",
        label: "1-bytemd 编辑器",
        icon: <ToolOutlined />,
        component: Bytemd,
      },
      {
        key: "drag",
        label: "2-拖拽",
        icon: <ToolOutlined />,
        component: Drag,
      },
      {
        key: "easy_coder",
        label: "3-easy_coder",
        icon: <ToolOutlined />,
        component: Easy_coder,
      },
      {
        key: "errorBoundary",
        label: "4-ErrorBoundary",
        icon: <ToolOutlined />,
        component: ErrorBoundary,
      },
      {
        key: "withErrorBoundary",
        label: "4-ErrorBoundary 高阶函数",
        icon: <ToolOutlined />,
        component: WithErrorBoundary,
      },
      {
        key: "Fps",
        label: "5-Fps",
        icon: <ToolOutlined />,
        component: Fps,
      },
      {
        key: "testHooks",
        label: "6-Hooks",
        icon: <ToolOutlined />,
        component: TestHooks,
      },
      {
        key: "TestHooksCustom",
        label: "6_hooks-custom",
        icon: <ToolOutlined />,
        component: TestHooksCustom,
      },
      
      {
        key: "node_splite",
        label: "7-node切割文件",
        icon: <ToolOutlined />,
        component: Node_splite,
      },
      {
        key: "react-docgen",
        label: "8-react-docgen",
        icon: <ToolOutlined />,
        component: ReactDocgen,
      },
      {
        key: "react-ref",
        label: "9-react-ref",
        icon: <ToolOutlined />,
        component: ReactRef,
      },
      {
        key: "setState-sync",
        label: "10-setState同步/异步",
        icon: <ToolOutlined />,
        component: SetState,
      },
      {
        key: "speechRecognition",
        label: "11-SpeechRecognition 语言识别",
        icon: <ToolOutlined />,
        component: SpeechRecognition,
      },
      {
        key: "PageLifecycle",
        label: "12-PageLifecycle 无框架埋点体系",
        icon: <ToolOutlined />,
        component: PageLifecycle,
      },
      {
        key: "Immutable",
        label: "13-immutable",
        icon: <ToolOutlined />,
        component: Immutable,
      },
      {
        key: "MyReact",
        label: "14_myReact",
        icon: <ToolOutlined />,
        component: MyReact,
      },
      {
        key: "15_css-transform",
        label: "15_css-transform",
        icon: <ToolOutlined />,
        component: CssTransform,
      },
    ],
  },
  {
    key: "other-react",
    label: "react相关",
    icon: <ToolOutlined />,
    children: [
      {
        key: "1_memo",
        label: "1_memo",
        icon: <ToolOutlined />,
        component: Memo,
      },
      
    ],
  },
  {
    key: "ppt",
    label: "ppt设计",
    icon: <ToolOutlined />,
    children: [
      {
        key: "RevealJs",
        label: "1_reveal",
        icon: <ToolOutlined />,
        component: RevealJs,
      },
    ],
  },
  {
    key: "css",
    label: "css相关",
    icon: <ToolOutlined />,
    children: [
      {
        key: "sticky",
        label: "1_sticky",
        icon: <ToolOutlined />,
        component: Sticky,
      },
      {
        key: "filter",
        label: "2_filter",
        icon: <ToolOutlined />,
        component: Filter,
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
