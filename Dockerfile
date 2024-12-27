# 使用 Node.js 镜像来构建应用
FROM node:18 AS builder

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制应用源代码
COPY . .

# 使用构建参数来设置环境变量
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# 根据环境构建应用
RUN if [ "$NODE_ENV" = "production" ]; then npm run build; else npm run build:dev; fi

# 使用 Nginx 镜像来服务构建的应用
FROM nginx:latest

# 复制构建输出到 Nginx 的 html 目录
COPY --from=builder /app/build /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]