import { lazy } from "react";
import { AppstoreOutlined, MenuOutlined } from "@ant-design/icons";
const Home = lazy(() => import(/* webpackChunkName: "Home" */ "@/pages/home"));

const Blog20221028 = lazy(() => import(/* webpackChunkName: "Blog20221028" */ "@/pages/blogs/2022-10-28"));
const Blog20221202 = lazy(() => import(/* webpackChunkName: "Blog20221202" */ "@/pages/blogs/2022-12-02"));

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
const ClassPrivateAttribute = lazy(() => import(/* webpackChunkName: "ClassPrivateAttribute" */ "@/pages/tech/19_class_private_attribute"));
const Observer = lazy(() => import(/* webpackChunkName: "Observer" */ "@/pages/tech/20_observer"));
const IntersectionObserver = lazy(() => import(/* webpackChunkName: "IntersectionObserver" */ "@/pages/tech/21_intersectionObserver"));

// React相关
const Memo = lazy(() => import(/* webpackChunkName: "Memo" */ "@/pages/react/1_memo"));
const React_SetState = lazy(() => import(/* webpackChunkName: "React_SetState" */ "@/pages/react/2_setState"));
const DefaultProps = lazy(() => import(/* webpackChunkName: "DefaultProps" */ "@/pages/react/3_defaultProps"));

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
const Calc = lazy(() => import(/* webpackChunkName: "Calc" */ "@/pages/css/9_calc"));
const Mask = lazy(() => import(/* webpackChunkName: "Mask" */ "@/pages/css/10_mask"));
const CssDrag = lazy(() => import(/* webpackChunkName: "CssDrag" */ "@/pages/css/11_drag"));
const FireWork = lazy(() => import(/* webpackChunkName: "FireWork" */ "@/pages/css/12_firework"));
const FireWorkColorful = lazy(() => import(/* webpackChunkName: "FireWorkColorful" */ "@/pages/css/13_firework_colorful"));
const CssAddeventListener = lazy(() => import(/* webpackChunkName: "CssAddeventListener" */ "@/pages/css/14_css_addeventListener"));
const Cqw = lazy(() => import(/* webpackChunkName: "Cqw" */ "@/pages/css/16_cqw"));
const CssVariables = lazy(() => import(/* webpackChunkName: "CssVariables" */ "@/pages/css/17_css_variables"));
const ImageFlipping = lazy(() => import(/* webpackChunkName: "ImageFlipping" */ "@/pages/css/18_image-flipping"));
const Progress = lazy(() => import(/* webpackChunkName: "Progress" */ "@/pages/css/19_progress"));

// Babylon相关 学习视频的案例
const BabylonBasics_Video = lazy(() => import(/* webpackChunkName: "BabylonBasics_Video" */ "@/pages/babylon-video/1_basic"));

// Babylon相关 学习视频的案例
const BabylonBasics_Doc = lazy(() => import(/* webpackChunkName: "BabylonBasics_Doc" */ "@/pages/babylon-doc/1_basic"));

// 聊天室
const ChatRoom = lazy(() => import(/* webpackChunkName: "ChatRoom" */ "@/pages/chatroom"));

// StoryBook Demos
const StoryBookDay01 = lazy(() => import(/* webpackChunkName: "StoryBookDay01" */ "@/pages/storybook/day01"));

// utils Demos
const Interface = lazy(() => import(/* webpackChunkName: "Interface" */ "@/pages/typescript/1_interface"));

// utils Demos
const EasyAgentSDK = lazy(() => import(/* webpackChunkName: "EasyAgentSDK" */ "@/pages/utils/easyAgentSDK"));

const routers = [
  {
    key: "",
    label: "首页",
    icon: <AppstoreOutlined />,
    component: Home,
  },
  {
    key: "Blogs",
    label: "Blogs相关",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "Blog20221028",
        label: "Blog20221028",
        icon: <MenuOutlined />,
        component: Blog20221028,
      }, {
        key: "Blog20221202",
        label: "Blog20221202",
        icon: <MenuOutlined />,
        component: Blog20221202,
      },
    ]
  },
  {
    key: "chat-room",
    label: "ChatRoom",
    icon: <AppstoreOutlined />,
    component: ChatRoom,
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
      {
        key: "3_defaultProps",
        label: "3_defaultProps",
        icon: <MenuOutlined />,
        component: DefaultProps,
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
      {
        key: "9_calc",
        label: "9_calc",
        icon: <MenuOutlined />,
        component: Calc,
      },
      {
        key: "10_mask",
        label: "10_mask",
        icon: <MenuOutlined />,
        component: Mask,
      },
      {
        key: "11_drag",
        label: "11_drag",
        icon: <MenuOutlined />,
        component: CssDrag,
      },
      {
        key: "12_firework",
        label: "12_firework",
        icon: <MenuOutlined />,
        component: FireWork,
      },
      {
        key: "13_firework_colorful",
        label: "13_firework_colorful",
        icon: <MenuOutlined />,
        component: FireWorkColorful,
      },
      {
        key: "14_css_addeventListener",
        label: "14_css_addeventListener",
        icon: <MenuOutlined />,
        component: CssAddeventListener,
      },
      {
        key: "16_cqw",
        label: "16_cqw",
        icon: <MenuOutlined />,
        component: Cqw,
      },
      {
        key: "17_css_variables",
        label: "17_css_variables",
        icon: <MenuOutlined />,
        component: CssVariables,
      },
      {
        key: "18_image-flipping",
        label: "18_image-flipping",
        icon: <MenuOutlined />,
        component: ImageFlipping,
      },
      {
        key: "19_progress",
        label: "19_progress",
        icon: <MenuOutlined />,
        component: Progress,
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
    ],
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
      {
        key: "19_class_private_attribute",
        label: "19_class_private_attribute",
        icon: <MenuOutlined />,
        component: ClassPrivateAttribute,
      },
      {
        key: "20_observer",
        label: "20_observer",
        icon: <MenuOutlined />,
        component: Observer,
      },
      {
        key: "21_intersectionObserver",
        label: "21_intersectionObserver",
        icon: <MenuOutlined />,
        component: IntersectionObserver,
      },
    ],
  },
  {
    key: "storybook",
    label: "StoryBook",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "day01",
        label: "day01",
        icon: <MenuOutlined />,
        component: StoryBookDay01,
      },
    ],
  },

  
  {
    key: "Typescript",
    label: "Typescript",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "Interface",
        label: "Interface",
        icon: <MenuOutlined />,
        component: Interface,
      },
    ],
  },
  {
    key: "utils",
    label: "utils",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "EasyAgentSDK",
        label: "EasyAgentSDK",
        icon: <MenuOutlined />,
        component: EasyAgentSDK,
      },
    ],
  },
];

export default routers;
