import { lazy } from 'react'
import { ToolOutlined } from "@ant-design/icons";
const Home = lazy(() => import(/* webpackChunkName: "Home" */  "@/pages/home"))


const Study_10_hoc = lazy(() => import(/* webpackChunkName: "Study_10_hoc" */  "@/pages/study_10_hoc"))
const Study_11_render = lazy(() => import(/* webpackChunkName: "Study_11_render" */  "@/pages/study_11_render"))
const Study_12_render2 = lazy(() => import(/* webpackChunkName: "Study_12_render2" */  "@/pages/study_12_render2"))
const Study_13_large_data = lazy(() => import(/* webpackChunkName: "Study_13_large_data" */  "@/pages/study_13_large_data"))
const Study_15_event = lazy(() => import(/* webpackChunkName: "Study_15_event" */  "@/pages/study_15_event"))

// 其他技术杂谈
const Bytemd = lazy(() => import(/* webpackChunkName: "Bytemd" */  "@/pages/other-tech/1_bytemd"))
const Drag = lazy(() => import(/* webpackChunkName: "Drag" */  "@/pages/other-tech/2_drag"))
const Easy_coder = lazy(() => import(/* webpackChunkName: "Easy_coder" */  "@/pages/other-tech/3_easy_coder"))
const ErrorBoundary = lazy(() => import(/* webpackChunkName: "ErrorBoundary" */  "@/pages/other-tech/4_errorBoundary"))
const WithErrorBoundary = lazy(() => import(/* webpackChunkName: "WithErrorBoundary" */  "@/pages/other-tech/4_errorBoundary/test-with"))
const Fps = lazy(() => import(/* webpackChunkName: "Fps" */  "@/pages/other-tech/5_fps"))
const TestHooks = lazy(() => import(/* webpackChunkName: "TestHooks" */  "@/pages/other-tech/6_hooks"))
const TestHooksCustom = lazy(() => import(/* webpackChunkName: "TestHooksCustom" */  "@/pages/other-tech/6_hooks-custom"))
const Node_splite = lazy(() => import(/* webpackChunkName: "Node_splite" */  "@/pages/other-tech/7_node_splite"))
const ReactDocgen = lazy(() => import(/* webpackChunkName: "ReactDocgen" */  "@/pages/other-tech/8_react-docgen"))
const ReactRef = lazy(() => import(/* webpackChunkName: "ReactRef" */  "@/pages/other-tech/9_react-ref"))
const SetState = lazy(() => import(/* webpackChunkName: "SetState" */  "@/pages/other-tech/10_setState"))
const SpeechRecognition = lazy(() => import(/* webpackChunkName: "SpeechRecognition" */  "@/pages/other-tech/11_speechRecognition"))
const PageLifecycle = lazy(() => import(/* webpackChunkName: "PageLifecycle" */  "@/pages/other-tech/12_pageLifecycle"))
const Immutable = lazy(() => import(/* webpackChunkName: "Immutable" */  "@/pages/other-tech/13_immutable"))
const MyReact = lazy(() => import(/* webpackChunkName: "MyReact" */  "@/pages/other-tech/14_myReact"))
const CssTransform = lazy(() => import(/* webpackChunkName: "CssTransform" */  "@/pages/other-tech/15_css-transform"))
const WebRTC = lazy(() => import(/* webpackChunkName: "WebRTC" */  "@/pages/other-tech/16_webRTC"))
const WebRTC2 = lazy(() => import(/* webpackChunkName: "WebRTC2" */  "@/pages/other-tech/16_webRTC2"))
const RequestAnimationFrame = lazy(() => import(/* webpackChunkName: "RequestAnimationFrame" */  "@/pages/other-tech/17_requestAnimationFrame"))
const DispatchEvent = lazy(() => import(/* webpackChunkName: "DispatchEvent" */  "@/pages/other-tech/18_dispatchEvent"))

// React相关
const Memo = lazy(() => import(/* webpackChunkName: "Memo" */  "@/pages/other-react/1_memo"))
const React_SetState = lazy(() => import(/* webpackChunkName: "React_SetState" */  "@/pages/other-react/2_setState"))

// PPT设计
const RevealJs = lazy(() => import(/* webpackChunkName: "RevealJs" */  "@/pages/ppt/1_reveal"))

// css相关
const Sticky = lazy(() => import(/* webpackChunkName: "Sticky" */  "@/pages/other-css/1_sticky"))
const Filter = lazy(() => import(/* webpackChunkName: "Filter" */  "@/pages/other-css/2_filter"))
const Sticky2 = lazy(() => import(/* webpackChunkName: "Sticky2" */  "@/pages/other-css/3_sticky"))
const TransitionStyle = lazy(() => import(/* webpackChunkName: "TransitionStyle" */  "@/pages/other-css/4_transition-style"))
const Css_min_max_clamp = lazy(() => import(/* webpackChunkName: "Css_min_max_clamp" */  "@/pages/other-css/5_min_max_clamp"))
const Font_variation_settings = lazy(() => import(/* webpackChunkName: "Font_variation_settings" */  "@/pages/other-css/6_font-variation-settings"))
const Translate3d = lazy(() => import(/* webpackChunkName: "Translate3d" */  "@/pages/other-css/7_translate3d"))

// Babylon相关 学习视频的案例
const BabylonBasics_Video = lazy(() => import(/* webpackChunkName: "BabylonBasics_Video" */  "@/pages/other-babylon-video/1_basic"))

// Babylon相关 学习视频的案例
const BabylonBasics_Doc = lazy(() => import(/* webpackChunkName: "BabylonBasics_Doc" */  "@/pages/other-babylon-doc/1_basic"))

// 聊天室
const ChatRoom = lazy(() => import(/* webpackChunkName: "ChatRoom" */  "@/pages/other-chatroom"))

const routers = [
  {
    key: "",
    label: "首页",
    icon: <ToolOutlined />,
    component: Home,
  },
  {
    key: "chat-room",
    label: "ChatRoom",
    icon: <ToolOutlined />,
    component: ChatRoom,
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
      {
        key: "16_webRTC",
        label: "16_webRTC",
        icon: <ToolOutlined />,
        component: WebRTC,
      },
      {
        key: "16_webRTC2",
        label: "16_webRTC2",
        icon: <ToolOutlined />,
        component: WebRTC2,
      },
      {
        key: "17_requestAnimationFrame",
        label: "17_requestAnimationFrame",
        icon: <ToolOutlined />,
        component: RequestAnimationFrame,
      },
      {
        key: "18_dispatchEvent",
        label: "18_dispatchEvent",
        icon: <ToolOutlined />,
        component: DispatchEvent,
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
      {
        key: "2_setState",
        label: "2_setState",
        icon: <ToolOutlined />,
        component: React_SetState,
      },
    ],
  },
  {
    key: "other-babylon-video",
    label: "Babylon相关 video",
    icon: <ToolOutlined />,
    children: [
      {
        key: "1_basic",
        label: "1_basic",
        icon: <ToolOutlined />,
        component: BabylonBasics_Video,
      },
    ],
  },
  {
    key: "other-babylon-doc",
    label: "Babylon相关 doc",
    icon: <ToolOutlined />,
    children: [
      {
        key: "01_basic",
        label: "01_basic",
        icon: <ToolOutlined />,
        component: BabylonBasics_Doc,
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
      {
        key: "sticky2",
        label: "3_sticky",
        icon: <ToolOutlined />,
        component: Sticky2,
      },
      {
        key: "transition-style",
        label: "4_transition-style",
        icon: <ToolOutlined />,
        component: TransitionStyle,
      },
      {
        key: "css_min_max_clamp",
        label: "5_min_max_clamp",
        icon: <ToolOutlined />,
        component: Css_min_max_clamp,
      },
      {
        key: "font-variation-settings",
        label: "6_font-variation-settings",
        icon: <ToolOutlined />,
        component: Font_variation_settings,
      },
      {
        key: "translate3d",
        label: "7_font-variation-settings",
        icon: <ToolOutlined />,
        component: Translate3d,
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
    key: "study_15_event",
    label: "15 原理篇-事件原理",
    icon: <ToolOutlined />,
    component: Study_15_event,
  },
];

export default routers;
