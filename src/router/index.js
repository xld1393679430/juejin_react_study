import { lazy } from "react";
import { AppstoreOutlined, MenuOutlined } from "@ant-design/icons";
const Home = lazy(() => import(/* webpackChunkName: "Home" */ "@/pages/home"));

const Study_10_hoc = lazy(() => import(/* webpackChunkName: "Study_10_hoc" */ "@/pages/juejin/study_10_hoc"));
const Study_11_render = lazy(() => import(/* webpackChunkName: "Study_11_render" */ "@/pages/juejin/study_11_render"));
const Study_12_render2 = lazy(() => import(/* webpackChunkName: "Study_12_render2" */ "@/pages/juejin/study_12_render2"));
const Study_13_large_data = lazy(() => import(/* webpackChunkName: "Study_13_large_data" */ "@/pages/juejin/study_13_large_data"));
const Study_15_event = lazy(() => import(/* webpackChunkName: "Study_15_event" */ "@/pages/juejin/study_15_event"));

// 其他技术杂谈
const Bytemd = lazy(() => import(/* webpackChunkName: "Bytemd" */ "@/pages/tech/1_bytemd"));
const Drag = lazy(() => import(/* webpackChunkName: "Drag" */ "@/pages/tech/2_drag"));
const Easy_coder = lazy(() => import(/* webpackChunkName: "Easy_coder" */ "@/pages/tech/3_easy_coder"));
const ErrorBoundary = lazy(() => import(/* webpackChunkName: "ErrorBoundary" */ "@/pages/tech/4_errorBoundary"));
const WithErrorBoundary = lazy(() => import(/* webpackChunkName: "WithErrorBoundary" */ "@/pages/tech/4_errorBoundary/test-with"));
const Fps = lazy(() => import(/* webpackChunkName: "Fps" */ "@/pages/tech/5_fps"));
const TestHooks = lazy(() => import(/* webpackChunkName: "TestHooks" */ "@/pages/tech/6_hooks"));
const TestHooksCustom = lazy(() => import(/* webpackChunkName: "TestHooksCustom" */ "@/pages/tech/6_hooks-custom"));
const Node_splite = lazy(() => import(/* webpackChunkName: "Node_splite" */ "@/pages/tech/7_node_splite"));
const ReactDocgen = lazy(() => import(/* webpackChunkName: "ReactDocgen" */ "@/pages/tech/8_react-docgen"));
const ReactRef = lazy(() => import(/* webpackChunkName: "ReactRef" */ "@/pages/tech/9_react-ref"));
const SetState = lazy(() => import(/* webpackChunkName: "SetState" */ "@/pages/tech/10_setState"));
const SpeechRecognition = lazy(() => import(/* webpackChunkName: "SpeechRecognition" */ "@/pages/tech/11_speechRecognition"));
const PageLifecycle = lazy(() => import(/* webpackChunkName: "PageLifecycle" */ "@/pages/tech/12_pageLifecycle"));
const Immutable = lazy(() => import(/* webpackChunkName: "Immutable" */ "@/pages/tech/13_immutable"));
const MyReact = lazy(() => import(/* webpackChunkName: "MyReact" */ "@/pages/tech/14_myReact"));
const CssTransform = lazy(() => import(/* webpackChunkName: "CssTransform" */ "@/pages/tech/15_css-transform"));
const WebRTC = lazy(() => import(/* webpackChunkName: "WebRTC" */ "@/pages/tech/16_webRTC"));
const WebRTC2 = lazy(() => import(/* webpackChunkName: "WebRTC2" */ "@/pages/tech/16_webRTC2"));
const RequestAnimationFrame = lazy(() => import(/* webpackChunkName: "RequestAnimationFrame" */ "@/pages/tech/17_requestAnimationFrame"));
const DispatchEvent = lazy(() => import(/* webpackChunkName: "DispatchEvent" */ "@/pages/tech/18_dispatchEvent"));

// React相关
const Memo = lazy(() => import(/* webpackChunkName: "Memo" */ "@/pages/react/1_memo"));
const React_SetState = lazy(() => import(/* webpackChunkName: "React_SetState" */ "@/pages/react/2_setState"));

// PPT设计
const RevealJs = lazy(() => import(/* webpackChunkName: "RevealJs" */ "@/pages/ppt/1_reveal"));

// css相关
const Sticky = lazy(() => import(/* webpackChunkName: "Sticky" */ "@/pages/css/1_sticky"));
const Filter = lazy(() => import(/* webpackChunkName: "Filter" */ "@/pages/css/2_filter"));
const Sticky2 = lazy(() => import(/* webpackChunkName: "Sticky2" */ "@/pages/css/3_sticky"));
const TransitionStyle = lazy(() => import(/* webpackChunkName: "TransitionStyle" */ "@/pages/css/4_transition-style"));
const Css_min_max_clamp = lazy(() => import(/* webpackChunkName: "Css_min_max_clamp" */ "@/pages/css/5_min_max_clamp"));
const Font_variation_settings = lazy(() => import(/* webpackChunkName: "Font_variation_settings" */ "@/pages/css/6_font-variation-settings"));
const Translate3d = lazy(() => import(/* webpackChunkName: "Translate3d" */ "@/pages/css/7_translate3d"));
const BackgroundClip = lazy(() => import(/* webpackChunkName: "BackgroundClip" */ "@/pages/css/8_background_clip"));

// Babylon相关 学习视频的案例
const BabylonBasics_Video = lazy(() => import(/* webpackChunkName: "BabylonBasics_Video" */ "@/pages/babylon-video/1_basic"));

// Babylon相关 学习视频的案例
const BabylonBasics_Doc = lazy(() => import(/* webpackChunkName: "BabylonBasics_Doc" */ "@/pages/babylon-doc/1_basic"));

// 聊天室
const ChatRoom = lazy(() => import(/* webpackChunkName: "ChatRoom" */ "@/pages/chatroom"));

const routers = [
  {
    key: "",
    label: "首页",
    icon: <AppstoreOutlined />,
    component: Home,
  },
  {
    key: "chat-room",
    label: "ChatRoom",
    icon: <AppstoreOutlined />,
    component: ChatRoom,
  },
  {
    key: "tech",
    label: "技术杂谈",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "bytemd",
        label: "1-bytemd 编辑器",
        icon: <MenuOutlined />,
        component: Bytemd,
      },
      {
        key: "drag",
        label: "2-拖拽",
        icon: <MenuOutlined />,
        component: Drag,
      },
      {
        key: "easy_coder",
        label: "3-easy_coder",
        icon: <MenuOutlined />,
        component: Easy_coder,
      },
      {
        key: "errorBoundary",
        label: "4-ErrorBoundary",
        icon: <MenuOutlined />,
        component: ErrorBoundary,
      },
      {
        key: "withErrorBoundary",
        label: "4-ErrorBoundary 高阶函数",
        icon: <MenuOutlined />,
        component: WithErrorBoundary,
      },
      {
        key: "Fps",
        label: "5-Fps",
        icon: <MenuOutlined />,
        component: Fps,
      },
      {
        key: "testHooks",
        label: "6-Hooks",
        icon: <MenuOutlined />,
        component: TestHooks,
      },
      {
        key: "TestHooksCustom",
        label: "6_hooks-custom",
        icon: <MenuOutlined />,
        component: TestHooksCustom,
      },

      {
        key: "node_splite",
        label: "7-node切割文件",
        icon: <MenuOutlined />,
        component: Node_splite,
      },
      {
        key: "react-docgen",
        label: "8-react-docgen",
        icon: <MenuOutlined />,
        component: ReactDocgen,
      },
      {
        key: "react-ref",
        label: "9-react-ref",
        icon: <MenuOutlined />,
        component: ReactRef,
      },
      {
        key: "setState-sync",
        label: "10-setState同步/异步",
        icon: <MenuOutlined />,
        component: SetState,
      },
      {
        key: "speechRecognition",
        label: "11-SpeechRecognition 语言识别",
        icon: <MenuOutlined />,
        component: SpeechRecognition,
      },
      {
        key: "PageLifecycle",
        label: "12-PageLifecycle 无框架埋点体系",
        icon: <MenuOutlined />,
        component: PageLifecycle,
      },
      {
        key: "Immutable",
        label: "13-immutable",
        icon: <MenuOutlined />,
        component: Immutable,
      },
      {
        key: "MyReact",
        label: "14_myReact",
        icon: <MenuOutlined />,
        component: MyReact,
      },
      {
        key: "15_css-transform",
        label: "15_css-transform",
        icon: <MenuOutlined />,
        component: CssTransform,
      },
      {
        key: "16_webRTC",
        label: "16_webRTC",
        icon: <MenuOutlined />,
        component: WebRTC,
      },
      {
        key: "16_webRTC2",
        label: "16_webRTC2",
        icon: <MenuOutlined />,
        component: WebRTC2,
      },
      {
        key: "17_requestAnimationFrame",
        label: "17_requestAnimationFrame",
        icon: <MenuOutlined />,
        component: RequestAnimationFrame,
      },
      {
        key: "18_dispatchEvent",
        label: "18_dispatchEvent",
        icon: <MenuOutlined />,
        component: DispatchEvent,
      },
    ],
  },
  {
    key: "react",
    label: "react相关",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "1_memo",
        label: "1_memo",
        icon: <MenuOutlined />,
        component: Memo,
      },
      {
        key: "2_setState",
        label: "2_setState",
        icon: <MenuOutlined />,
        component: React_SetState,
      },
    ],
  },
  {
    key: "babylon-video",
    label: "Babylon相关 video",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "1_basic",
        label: "1_basic",
        icon: <MenuOutlined />,
        component: BabylonBasics_Video,
      },
    ],
  },
  {
    key: "babylon-doc",
    label: "Babylon相关 doc",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "01_basic",
        label: "01_basic",
        icon: <MenuOutlined />,
        component: BabylonBasics_Doc,
      },
    ],
  },
  {
    key: "ppt",
    label: "ppt设计",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "RevealJs",
        label: "1_reveal",
        icon: <MenuOutlined />,
        component: RevealJs,
      },
    ],
  },
  {
    key: "css",
    label: "css相关",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "sticky",
        label: "1_sticky",
        icon: <MenuOutlined />,
        component: Sticky,
      },
      {
        key: "filter",
        label: "2_filter",
        icon: <MenuOutlined />,
        component: Filter,
      },
      {
        key: "sticky2",
        label: "3_sticky",
        icon: <MenuOutlined />,
        component: Sticky2,
      },
      {
        key: "transition-style",
        label: "4_transition-style",
        icon: <MenuOutlined />,
        component: TransitionStyle,
      },
      {
        key: "css_min_max_clamp",
        label: "5_min_max_clamp",
        icon: <MenuOutlined />,
        component: Css_min_max_clamp,
      },
      {
        key: "font-variation-settings",
        label: "6_font-variation-settings",
        icon: <MenuOutlined />,
        component: Font_variation_settings,
      },
      {
        key: "translate3d",
        label: "7_font-variation-settings",
        icon: <MenuOutlined />,
        component: Translate3d,
      },
      {
        key: "8_background_clip",
        label: "8_background_clip",
        icon: <MenuOutlined />,
        component: BackgroundClip,
      },
    ],
  },
  {
    key: "juejin",
    label: "掘金笔记",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "study_10_hoc",
        label: "10 基础篇-高阶组件",
        icon: <MenuOutlined />,
        component: Study_10_hoc,
      },
      {
        key: "study_11_render",
        label: "11 优化篇-渲染控制",
        icon: <MenuOutlined />,
        component: Study_11_render,
      },
      {
        key: "study_12_render2",
        label: "12 优化篇-渲染调优",
        icon: <MenuOutlined />,
        component: Study_12_render2,
      },
      {
        key: "study_13_large_data",
        label: "13 优化篇-处理海量数据",
        icon: <MenuOutlined />,
        component: Study_13_large_data,
      },
      {
        key: "study_15_event",
        label: "15 原理篇-事件原理",
        icon: <MenuOutlined />,
        component: Study_15_event,
      },
    ]
  },
  
];

export default routers;
