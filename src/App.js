import { useCallback, useEffect, useRef, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import lifecycle from "page-lifecycle";
import { notification, Button } from "antd";
import { observer, inject } from "mobx-react";
import routers from "@/router";
import NotFound from "@/components/NotFound";
import Layout from "@/components/Layout";
import Wrapper from "@/components/Wrapper";

function App({ lifecycleStore }) {
  const InitComponent = routers[0].component;

  const mutationObserverRef = useRef(null);

  const handleStateChange = useCallback((event) => {
    notification.open({
      message: "页面生命周期",
      description: `旧的生命周期: ${event.oldState}, 新的生命周期: ${event.newState}`,
      duration: 4,
    });
  }, []);

  const initMutationObserver = useCallback(() => {
    mutationObserverRef.current = new MutationObserver((mutations, observer) => {
      mutations.forEach((mutation) => {
        // notification.open({
        //   message: "Dom解构发生了改变",
        //   // description: `旧的生命周期: ${event.oldState}, 新的生命周期: ${event.newState}`,
        //   duration: 4,
        // });
      });
    });

    mutationObserverRef.current.observe(document.documentElement, {
      childList: false, //子节点的变动（指新增，删除或者更改）
      attributes: true, // 属性的变动
      characterData: true, // 节点内容或节点文本的变动
      subtree: true, // 表示是否将该观察器应用于该节点的所有后代节点
      attributeOldValue: true, // 表示观察 attributes 变动时，是否需要记录变动前的属性值
      characterDataOldValue: true, // 表示观察 characterData 变动时，是否需要记录变动前的值。
      attributeFilter: ["monitor-pv"], // 表示需要观察的特定属性，比如['class','src']
    });
  }, [mutationObserverRef]);

  const initPage = useCallback(() => {
    // 借助Google的pageLifecycle.js 监控页面的生命周期状态
    lifecycle.addEventListener("statechange", handleStateChange);

    // 借助MutationObserver监听DOM 结构变化
    initMutationObserver();
  }, []);

  const removeListener = useCallback(() => {
    lifecycle.removeEventListener("statechange", handleStateChange);

    mutationObserverRef.current?.disconnect(); // 用来停止观察。调用该方法后，DOM 再发生变动则不会触发观察器
  }, [mutationObserverRef]);

  const SuspenseComponent = useCallback(({ Component, ...rest }) => {
    return (
      <Suspense fallback={<div>Loading....</div>}>
        <Component {...rest} />
      </Suspense>
    );
  }, []);

  useEffect(() => {
    if (lifecycleStore?.show) {
      initPage();
    }

    return () => {
      removeListener();
    };
  }, [lifecycleStore?.show]);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SuspenseComponent Component={InitComponent} />} />
          {routers.map((item, index) => {
            const Component = item.component;
            if (Component) {
              return <Route key={`${item.key}---${index}`} path={item.key} element={<SuspenseComponent Component={Component} />} />;
            } else if (item.children?.length) {
              return (
                <Route key={`${item.key}---${index}`} path={item.key} element={<Wrapper />}>
                  {item.children.map((sItem, sIndex) => {
                    const Component = sItem.component;
                    return <Route key={`${sItem.key}---${sIndex}`} path={sItem.key} element={<SuspenseComponent Component={Component} />} />;
                  })}
                </Route>
              );
            }
          })}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default inject("lifecycleStore")(observer(App));
