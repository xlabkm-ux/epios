import Fastify from 'fastify';

export function buildServer() {
  const app = Fastify({ logger: true });

  app.get('/health', async () => {
    return {
      ok: true,
      service: 'epistemic-os-api',
      timestamp: new Date().toISOString()
    };
  });

  return app;
}
