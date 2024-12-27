<!-- # 项目部署指南

## 环境准备

1. **准备环境变量文件**：
   - 确保在项目根目录下有适当的 `.env` 文件（如 `.env.development`, `.env.production` 等），这些文件将用于配置不同的环境变量。

## 打包步骤

1. **构建 Docker 镜像**：

   ```bash
   # 开发环境构建
   docker build --build-arg NODE_ENV=development -t myapp:development .

   # 生产环境构建
   docker build --build-arg NODE_ENV=production \
                --build-arg VITE_APP_BASE_API=your_api_base \
                --build-arg VITE_APP_ENV=production \
                -t myapp:production .
   ```

2. **使用 Docker Compose 构建和运行**：

   ```bash
   # 使用环境变量并启动服务
   VITE_APP_BASE_API=your_api_base VITE_APP_ENV=production NODE_ENV=production docker-compose up -d
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

通过以上步骤，你可以成功地打包和启动你的 Docker 项目。确保在每次修改配置后重新构建镜像以应用更改。 -->

# 项目名称

## 简介

这是一个使用 React 和 Docker 构建的示例项目。项目旨在展示如何使用 Docker 和 Docker Compose 部署多环境的前端应用。

## 部署指南

### 环境准备

在开始之前，请确保你已经安装了以下工具：

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### 环境配置

项目支持多种环境配置，包括开发、测试、预发和生产环境。请根据需要选择合适的环境变量文件：

- `.env.development`：开发环境
- `.env.test`：测试环境
- `.env.staging`：预发环境
- `.env.production`：生产环境

### 构建和运行

#### 构建 Docker 镜像

在项目根目录下，使用以下命令构建 Docker 镜像：

docker build -t my-react-app --build-arg NODE_ENV=production .

#### 启动容器

根据不同的环境，使用以下命令启动容器：

##### 开发环境

docker-compose --env-file .env.development up

```bash
docker-compose -f docker-compose.yml -f docker-compose.staging.yml --env-file .env.test up -d
```

访问地址：[http://localhost:8080](http://localhost:8080)

##### 测试环境

##### 预发环境

```bash
docker-compose -f docker-compose.yml -f docker-compose.staging.yml --env-file .env.staging up -d
```

访问地址：[http://localhost:8081](http://localhost:8081)

##### 生产环境

```bash
docker-compose -f docker-compose.yml -f docker-compose.production.yml --env-file .env.production up -d
```

访问地址：[http://your-production-domain.com](http://your-production-domain.com)

### 访问项目

根据你所选择的环境，使用相应的 URL 访问项目。确保在生产环境中使用正确的域名和 SSL 证书。

### 注意事项

- 确保在生产环境中配置了适当的安全措施，如防火墙和 SSL 证书。
- 在更改环境变量或配置文件后，重新构建和启动容器以应用更改。

## 贡献

欢迎对本项目的贡献！请遵循以下步骤：

1. Fork 本仓库。
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)。
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)。
4. 推送到分支 (`git push origin feature/AmazingFeature`)。
5. 打开一个 Pull Request。

## 许可证

本项目使用 MIT 许可证。详情请参阅 [LICENSE](LICENSE) 文件。
