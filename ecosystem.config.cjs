module.exports = {
  apps: [
    {
      name: "epios-api",
      script: "./packages/api/src/bin.ts",
      interpreter: "node",
      interpreter_args: "--import tsx",
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "epios-ui",
      script: "cmd.exe",
      args: "/c pnpm --filter demo-shell dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
