# @tanstack/react-query

> Async state management for React — powerful data fetching, caching, background sync, and server state without writing a single reducer.

**npm:** https://www.npmjs.com/package/@tanstack/react-query  
**GitHub:** https://github.com/TanStack/query  
**Docs:** https://tanstack.com/query/latest

---

## The Problem

Fetching data in React components leads to the same boilerplate everywhere: `useState` for loading, data, and error; `useEffect` to trigger the fetch; manual cache invalidation after mutations; race conditions when the same resource is requested from multiple components; and no built-in retry or background refresh. Over time, every team ends up building their own half-working version of a data layer.

---

## What It Does

TanStack Query treats server state as a first-class concern separate from UI state. A `useQuery` hook fetches, caches, and automatically revalidates data in the background. A `useMutation` hook handles writes with optimistic updates and cache invalidation. Multiple components subscribing to the same query key share a single in-flight request and cache entry — no duplicate fetches. It works with any async function (REST, GraphQL, anything) and pairs perfectly with Next.js App Router via its streaming and SSR support.

---

## Installation

```bash
npm install @tanstack/react-query
```

---

## Usage Example

```tsx
// main.tsx — wrap app with QueryClientProvider
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProfile userId="42" />
    </QueryClientProvider>
  );
}

// UserProfile.tsx — fetch, cache, and display user data
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

async function fetchUser(id: string) {
  const res = await fetch(`/api/users/${id}`);
  if (!res.ok) throw new Error('Failed to fetch user');
  return res.json();
}

export function UserProfile({ userId }: { userId: string }) {
  const queryClient = useQueryClient();

  const { data: user, isLoading, error } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
    staleTime: 1000 * 60 * 5, // cache for 5 minutes
  });

  const updateBio = useMutation({
    mutationFn: (bio: string) =>
      fetch(`/api/users/${userId}`, {
        method: 'PATCH',
        body: JSON.stringify({ bio }),
      }),
    onSuccess: () => {
      // Invalidate and refetch the user query after update
      queryClient.invalidateQueries({ queryKey: ['user', userId] });
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {(error as Error).message}</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      <button onClick={() => updateBio.mutate('New bio text')}>
        Update Bio
      </button>
    </div>
  );
}
```

---

## Screenshot / Demo

<!-- Optional but encouraged. Drag an image into your PR or paste a link -->

---

## Submitted by

[@claude](https://github.com/claude)
