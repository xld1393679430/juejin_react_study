import { BrowserRouter, Routes, Route } from "react-router-dom";
import routers from "@/router";
import NotFound from "@/components/NotFound";
import Layout from "@/components/Layout";
import Wrapper from '@/components/Wrapper'

function App() {
  const InitComponent = routers[0].component;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<InitComponent />} />
          {routers.map((item, index) => {
            const Component = item.component;
            if (Component) {
              return <Route key={`${item.key}---${index}`} path={item.key} element={<Component />} />;
            } else if (item.children?.length) {
              return (
                <Route key={`${item.key}---${index}`}  path={item.key} element={<Wrapper />}>
                  {
                    item.children.map((sItem, sIndex) => {
                      const Component = sItem.component;
                      return <Route key={`${sItem.key}---${sIndex}`} path={sItem.key} element={<Component />} />
                    })
                  }
                </Route>
              )
            }
          })}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
