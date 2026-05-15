/**
 * OpenAPI Definition for EPIOS (Derived from Schemas)
 *
 * TODO: Use a generator like fastify-swagger to auto-generate this from Zod schemas.
 */

export const OpenAPIConfig = {
  openapi: "3.1.0",
  info: {
    title: "Epistemic OS API",
    version: "0.1.0-rc.1",
    description: "API for structured reasoning and epistemic governance.",
  },
  servers: [
    {
      url: "http://localhost:3000/api/v1",
      description: "Local development server",
    },
  ],
  components: {
    securitySchemes: {
      ApiKeyAuth: {
        type: "apiKey",
        in: "header",
        name: "X-API-KEY",
      },
    },
  },
};
