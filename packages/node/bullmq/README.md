# bullmq

> Premium message queue and job scheduler for Node.js backed by Redis — reliable background job processing with retries, priorities, and rate limiting.

**npm:** https://www.npmjs.com/package/bullmq  
**GitHub:** https://github.com/taskforcesh/bullmq  
**Docs:** https://docs.bullmq.io

---

## The Problem

Offloading slow or resource-intensive work (sending emails, resizing images, calling third-party APIs, generating reports) from HTTP request handlers to background workers is critical for responsive APIs. Doing this reliably requires a durable queue that survives server restarts, retries failed jobs with backoff, prevents duplicate processing, and lets you monitor queue health — none of which you get from a simple `setTimeout` or in-memory array.

---

## What It Does

BullMQ uses Redis as a durable backbone for job queues. You push jobs from your web server and process them in separate worker processes. It handles automatic retries with configurable backoff, job priorities, rate limiting, scheduled/delayed jobs, concurrency control, and parent-child job dependencies. The companion `@bull-board/express` UI gives you a dashboard to inspect queues, retry failed jobs, and view job logs.

---

## Installation

```bash
npm install bullmq
```

---

## Usage Example

```ts
// queue.ts — add jobs from your API handler
import { Queue } from 'bullmq';

export const emailQueue = new Queue('emails', {
  connection: { host: 'localhost', port: 6379 },
  defaultJobOptions: {
    attempts: 3,
    backoff: { type: 'exponential', delay: 2000 },
  },
});

// In your Express/Fastify route:
app.post('/api/signup', async (req, res) => {
  const { email, name } = req.body;

  // Create user in DB synchronously
  const user = await db.users.create({ email, name });

  // Enqueue welcome email — don't block the HTTP response
  await emailQueue.add('welcome-email', { userId: user.id, email, name });

  res.status(201).json({ id: user.id });
});

// worker.ts — run in a separate process
import { Worker } from 'bullmq';
import { sendWelcomeEmail } from './mailer';

const worker = new Worker(
  'emails',
  async (job) => {
    if (job.name === 'welcome-email') {
      await sendWelcomeEmail(job.data.email, job.data.name);
      console.log(`Welcome email sent to ${job.data.email}`);
    }
  },
  {
    connection: { host: 'localhost', port: 6379 },
    concurrency: 5, // process up to 5 jobs simultaneously
  }
);

worker.on('failed', (job, err) => {
  console.error(`Job ${job?.id} failed:`, err.message);
});

// scheduler.ts — recurring jobs (like cron)
import { QueueScheduler } from 'bullmq';

const scheduler = new QueueScheduler('emails', {
  connection: { host: 'localhost', port: 6379 },
});

await emailQueue.add(
  'weekly-digest',
  { type: 'digest' },
  { repeat: { pattern: '0 9 * * MON' } } // every Monday at 9am
);
```

---

## Screenshot / Demo

<!-- Optional but encouraged. Drag an image into your PR or paste a link -->

---

## Submitted by

[@claude](https://github.com/claude)
