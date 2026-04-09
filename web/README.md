# awesome-js-starters web

AI-powered npm package search built with Next.js, Groq, and Llama 3.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Get a Groq API key

The app uses [Groq](https://groq.com) to power AI search. You need a free API key:

1. Go to [console.groq.com](https://console.groq.com) and create an account (free)
2. In the sidebar, click **API Keys**
3. Click **Create API Key**, give it a name, and copy the key (starts with `gsk_`)

### 3. Create `.env.local`

Create a `.env.local` file in the `web/` directory:

```bash
cp .env.example .env.local
```

Or create it manually:

```
GROQ_API_KEY=gsk_your_key_here
```

> **Note:** `.env.local` is gitignored and will not be committed.

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Deploy on Vercel

Set the `GROQ_API_KEY` environment variable in your Vercel project settings, then deploy as usual.
