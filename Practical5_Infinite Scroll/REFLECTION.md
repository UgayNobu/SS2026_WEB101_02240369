## a) Documentation - Main Concepts Applied

### 1. Cursor-Based Pagination
I updated the backend to use cursor-based pagination instead of offset-based.

Instead of using page numbers, it now uses an ID as a reference point to fetch the next batch of videos. At first I didn't really understand why this is better but after implementing it I get it — it gives consistent results even when new videos are added, which offset pagination can't do properly.

### 2. TanStack Query (useInfiniteQuery)
I used `useInfiniteQuery` from TanStack Query to handle loading videos on the frontend.

It automatically manages loading states, error states and tracks the next cursor. Before I was doing this manually with useState and useEffect which was getting pretty messy ngl.

### 3. Intersection Observer API
I created a custom hook `useIntersectionObserver.js` using the browser's Intersection Observer API.

When the bottom element enters the screen it automatically triggers loading more videos. I had no idea this API existed before this practical lol. Way better than scroll event listeners.

### 4. QueryClientProvider
I wrapped the whole app with `QueryClientProvider` in `layout.js` so TanStack Query is available everywhere.

Same concept as wrapping with AuthProvider in Practical 4. Also added ReactQueryDevtools which shows a debug panel — actually really useful for seeing query states.

### 5. Video Service Updates
I updated `videoService.js` so `getVideos` accepts a cursor value and sends it to the backend as a query parameter.

This is what connects the frontend infinite scroll logic to the backend pagination.

## b) Reflection

### What I Learned
- difference between cursor and offset pagination
- how `useInfiniteQuery` works in TanStack Query
- how Intersection Observer API detects when you reach bottom of page
- how to create custom React hooks
- how to debug by checking API response directly in browser instead of just guessing

### Challenges Faced

#### Challenge 1: Path Alias Errors
I kept getting this build error:
> Module not found: Can't resolve '@/hooks/useIntersectionObserver'

Turns out my `jsconfig.json` had `@/*` pointing to `"./*"` (root folder) but my hooks folder was inside `src`. So it was looking in the wrong place 😅

Fixed it by using relative paths like `../../hooks/useIntersectionObserver` instead of `@/`.

#### Challenge 2: Duplicate Functions
I accidentally added the new `getAllVideos` below the old one instead of replacing it. So the file had two functions with the same name and caused conflicts.

Fixed it by doing Cmd + A to select everything and replacing the whole file with the clean version.

#### Challenge 3: Wrong Port Number
Backend was running on port `8000` but `videoService.js` was pointing to `8001`. Requests were going nowhere lol.

Just changed the port to `8000` in `videoService.js`.

#### Challenge 4: Empty Database
Page loaded fine but showed "No videos found". I thought something was still broken.

Opened `http://localhost:8000/api/videos` directly in browser and saw:
```json
{"videos":[],"pagination":{"nextCursor":null,"hasNextPage":false}}
```
API was working perfectly — database just had no videos yet 😅

### How I Overcame Them
- switched to relative imports after checking `jsconfig.json`
- replaced whole file instead of adding code below
- matched port numbers between frontend and backend
- tested API directly in browser to understand the actual response