import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "mobx-react";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.css";
import stores from "@/store";

Sentry.init({
  dsn: "https://a6162adfe3d741b0b5ff6108791c103e@o4504751326167040.ingest.sentry.io/4504751328591872",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//    </React.StrictMode>
// );

// 开发环境使用StrictMode会导致render触发两次
root.render(
  <Provider {...stores}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
