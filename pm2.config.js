module.exports = {
  apps: [
    {
      name: "minecraft-panel-api",
      cwd: "api",
      script: "npm run start",
      watch: true
    },
    {
      name: "minecraft-panel-client",
      cwd: "client",
      script: "npm run dev",
      watch: false
    },
  ],
};
