module.exports = {
  apps: [
    {
      name: "react-app",
      script: "serve",
      args: ["-s", "build", "-l", "3000"],
      env: {
        PM2_SERVE_PATH: "/home/ubuntu/ggumbi_test_front/client/build",
        PM2_SERVE_PORT: 3000,
        PM2_SERVE_SPA: "true",
      },
    },
  ],
};
