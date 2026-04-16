# swagger-ui-express

> Serve Swagger UI from your Express app — auto-generate interactive API documentation from your OpenAPI spec.

**npm:** https://www.npmjs.com/package/swagger-ui-express
**GitHub:** https://github.com/scottie1984/swagger-ui-express
**Docs:** https://github.com/scottie1984/swagger-ui-express

---

## The Problem

API documentation that lives in a separate wiki gets out of sync with the actual API. Developers need interactive, up-to-date documentation that lets them test endpoints directly from the browser.

---

## What It Does

`swagger-ui-express` serves the Swagger UI at a configurable route and renders your OpenAPI/Swagger JSON or YAML spec as an interactive documentation page. Combined with `swagger-jsdoc`, docs can be auto-generated from JSDoc comments in your route files.

---

## Installation

```bash
npm install swagger-ui-express swagger-jsdoc
npm install -D @types/swagger-ui-express
```

---

## Usage Example

```typescript
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const spec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: { title: 'My API', version: '1.0.0' },
  },
  apis: ['./src/routes/*.ts'],
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));
// Visit http://localhost:3000/api-docs
```

```typescript
/**
 * @openapi
 * /users:
 *   get:
 *     summary: List all users
 *     responses:
 *       200:
 *         description: Array of users
 */
app.get('/users', (req, res) => res.json(users));
```

---

## Screenshot / Demo

<!-- https://github.com/scottie1984/swagger-ui-express -->

---

## Submitted by

[@claude](https://github.com/claude)
