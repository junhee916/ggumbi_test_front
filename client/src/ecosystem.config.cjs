module.exports = {
  apps: [
    {
      name: "react-app",
      script: "npx",
      args: "serve -s build -l 3000",
      cwd: "/home/ubuntu/ggumbi_test_front/client", // 프로젝트 디렉토리 경로
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
