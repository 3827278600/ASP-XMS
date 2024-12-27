import { registerMicroApps, start } from 'qiankun';
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

registerMicroApps([
  {
    name: 'sub-app', // 子应用名称
    entry: '//localhost:7100', // 子应用入口
    container: '#subapp-container', // 子应用挂载的 DOM 节点
    activeRule: '/sub-app', // 子应用激活的路由规则
  },
]);

start();
// // 引入并配置埋点 SDK
// import * as Sentry from '@sentry/react';
// import { browserTracingIntegration } from "@sentry/react";

// Sentry.init({
//   dsn: 'YOUR_DSN',
//   integrations: [browserTracingIntegration()],

//   // 设置追踪采样率
//   tracesSampleRate: 1.0,
// });

const root = 

createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
