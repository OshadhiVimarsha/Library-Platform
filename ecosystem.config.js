module.exports = {
  apps : [
    {
      name: "Cloud-sql-auth-proxy",
      script: "./cloud-sql-proxy project-b2a5e362-17b9-4abe-95d:asia-southeast1:mysql-vm project-b2a5e362-17b9-4abe-95d:asia-southeast1:postgres-vm --private-ip",
      log_file: "./logs/cloud-sql-proxy.log",
    },
    {
      name   : "config-server",
      script : "java",
      args   : "-jar ./config-server/target/config-server-1.0.0.jar",
      log_file: "./logs/config-server.log",
    },
    {
      name   : "service-registry",
      script : "java",
      args   : "-jar ./service-registry/target/service-registry-1.0.0.jar",
      log_file: "./logs/config-server.log",
    },
    {
      name   : "api-gateway",
      script : "java",
      args   : "-jar ./api-gateway/target/api-gateway-1.0.0.jar",
      log_file: "./logs/config-server.log",
    }
  ]
}