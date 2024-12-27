# 项目部署指南

## 环境准备

1. **准备环境变量文件**：
   - 确保在项目根目录下有适当的 `.env` 文件（如 `.env.development`, `.env.production` 等），这些文件将用于配置不同的环境变量。

## 打包步骤

1. **构建 Docker 镜像**：

   - 使用以下命令构建 Docker 镜像。确保在命令中指定正确的环境变量文件。

   ```bash
   NODE_ENV=production docker-compose build
   ```

2. **检查构建的镜像**：
   - 使用以下命令查看构建的镜像：
   ```bash
   docker images
   ```

## 启动步骤

1. **启动服务**：

   - 使用以下命令启动服务：

   ```bash
   NODE_ENV=production docker-compose up
   ```

   - 这将启动 `web` 和 `app` 两个服务。

2. **后台运行**：

   - 如果希望在后台运行服务，可以使用 `-d` 选项：

   ```bash
   NODE_ENV=production docker-compose up -d
   ```

3. **查看运行中的容器**：

   - 使用以下命令查看正在运行的容器：

   ```bash
   docker ps
   ```

4. **停止服务**：

   - 使用以下命令停止服务：

   ```bash
   docker-compose down
   ```

5. **日志查看**：
   - 使用以下命令查看服务日志：
   ```bash
   docker-compose logs -f
   ```

## 注意事项

- **端口冲突**：确保本地机器上没有其他服务占用 `80` 端口。
- **环境变量**：根据需要调整 `.env` 文件中的变量，以适应不同的环境。
- **Nginx 配置**：如果需要修改 Nginx 配置，请编辑 `default.conf` 文件，并确保在 `docker-compose.yml` 中正确挂载。

通过以上步骤，你可以成功地打包和启动你的 Docker 项目。确保在每次修改配置后重新构建镜像以应用更改。

构建命令docker build --build-arg NODE_ENV=development -t myapp:development . docker build --build-arg NODE_ENV=production -t myapp:production .

启动命令docker run -d -p 8080:80 myapp:development docker run -d -p 8080:80 myapp:production
