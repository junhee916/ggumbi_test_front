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
    {
      name: "api-server",
      script: "./server.js",
      watch: true,
      env: {
        NODE_ENV: "development",
        PORT: 3001,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3001,
      },
    },
  ],
};
