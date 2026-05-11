import { buildServer } from "./server.js";

const server = buildServer();
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

server.listen({ port, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`Server listening at ${address}`);
});
