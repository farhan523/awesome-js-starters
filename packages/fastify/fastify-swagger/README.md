# @fastify/swagger

> OpenAPI/Swagger documentation plugin for Fastify — auto-generate API specs from your route schemas with zero extra config.

**npm:** https://www.npmjs.com/package/@fastify/swagger
**GitHub:** https://github.com/fastify/fastify-swagger
**Docs:** https://github.com/fastify/fastify-swagger

---

## The Problem

Keeping API documentation in sync with your actual route implementations requires manual maintenance. In Fastify, route schemas already describe request/response shapes — wiring these to OpenAPI output should be automatic.

---

## What It Does

`@fastify/swagger` reads the JSON Schema definitions you already write for Fastify routes and converts them into an OpenAPI 3 spec. Pair it with `@fastify/swagger-ui` to serve interactive documentation at `/documentation`. Zero extra configuration when schemas are already defined.

---

## Installation

```bash
npm install @fastify/swagger @fastify/swagger-ui
```

---

## Usage Example

```typescript
import fastify from 'fastify';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';

const app = fastify();

await app.register(swagger, {
  openapi: { info: { title: 'My API', version: '1.0.0' } },
});
await app.register(swaggerUi, { routePrefix: '/docs' });

app.get('/users/:id', {
  schema: {
    params: { type: 'object', properties: { id: { type: 'string' } } },
    response: { 200: { type: 'object', properties: { name: { type: 'string' } } } },
  },
}, async (req) => ({ name: 'Alice' }));
```

---

## Screenshot / Demo

<!-- https://github.com/fastify/fastify-swagger -->

---

## Submitted by

[@claude](https://github.com/claude)
