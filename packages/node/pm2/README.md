# pm2

> Production process manager for Node.js — cluster mode, zero-downtime reloads, log management, and startup scripts.

**npm:** https://www.npmjs.com/package/pm2
**GitHub:** https://github.com/Unitech/pm2
**Docs:** https://pm2.keymetrics.io/docs/

---

## The Problem

Running a Node.js app in production means handling crashes (auto-restart), multi-core utilization (cluster mode), log rotation, and starting the app automatically on server reboot — none of which the `node` command provides.

---

## What It Does

PM2 runs your app as a managed process, restarts it on crash, spreads load across CPU cores with cluster mode, streams logs with rotation, and generates systemd/init scripts for boot persistence. The `pm2 monit` dashboard shows CPU and memory usage in real time.

---

## Installation

```bash
npm install -g pm2
```

---

## Usage Example

```bash
# Start in cluster mode across all CPU cores
pm2 start dist/server.js --name "my-api" -i max

# Zero-downtime reload after deployment
pm2 reload my-api

# View logs
pm2 logs my-api

# Save process list and generate startup script
pm2 save
pm2 startup
```

```json
// ecosystem.config.js
module.exports = {
  apps: [{ name: 'api', script: 'dist/server.js', instances: 'max', exec_mode: 'cluster' }]
};
```

---

## Screenshot / Demo

<!-- https://pm2.keymetrics.io/docs/usage/quick-start/ -->

---

## Submitted by

[@claude](https://github.com/claude)
