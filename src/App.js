import { BrowserRouter, Routes, Route } from "react-router-dom";
import routers from "./router";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";

function App() {
  const InitComponent = routers[0].component;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<InitComponent />} />
          {routers.map((item, index) => {
            const Component = item.component;
            return <Route key={`${item.key}---${index}`} path={item.key} element={<Component />} />;
          })}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
