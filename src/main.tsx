import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// 引入并配置埋点 SDK
import * as Sentry from '@sentry/react';
import { browserTracingIntegration } from "@sentry/react";

Sentry.init({
  dsn: 'YOUR_DSN',
  integrations: [browserTracingIntegration()],

  // 设置追踪采样率
  tracesSampleRate: 1.0,
});

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
