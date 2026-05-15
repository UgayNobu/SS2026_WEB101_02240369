# Practical 5: Implementing Infinite Scroll with TanStack Query

## Overview
In this practical, we implement infinite scrolling in our TikTok app using TanStack Query with cursor-based pagination. This gives a smooth endless scrolling experience like the real TikTok.

## Prerequisites
- Node.js installed
- Practical 4 backend running
- Git

## Part 1: Backend Implementation

### Step 1: Update Video Controller
Open `src/controllers/videoController.js` and update the `getAllVideos` function to support cursor-based pagination:

```js
exports.getAllVideos = async (req, res) => {
  try {
    const { cursor, limit = 10 } = req.query;
    const limitNum = parseInt(limit) || 10;

    const queryOptions = {
      take: limitNum + 1,
      orderBy: { createdAt: 'desc' },
      include: {
        user: {
          select: { id: true, username: true, name: true, avatar: true },
        },
        _count: { select: { likes: true, comments: true } },
      },
    };

    if (cursor) {
      queryOptions.cursor = { id: parseInt(cursor) };
      queryOptions.skip = 1;
    }

    const videos = await prisma.video.findMany(queryOptions);
    const hasNextPage = videos.length > limitNum;
    if (hasNextPage) videos.pop();

    const nextCursor = hasNextPage
      ? videos[videos.length - 1].id.toString()
      : null;

    res.status(200).json({
      videos,
      pagination: { nextCursor, hasNextPage },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
```

### Step 2: Update getFollowingVideos
Similarly update `getFollowingVideos` to use cursor-based pagination with the same pattern.

## Part 2: Frontend Implementation

### Step 1: Install Dependencies
```bash
npm install @tanstack/react-query @tanstack/react-query-devtools
```

### Step 2: Update layout.js
Wrap the app with `QueryClientProvider` from TanStack Query and add `ReactQueryDevtools`.

### Step 3: Update videoService.js
Update `getVideos` and `getFollowingVideos` to accept `pageParam` as cursor for pagination.

### Step 4: Create useIntersectionObserver.js
Create new file `src/hooks/useIntersectionObserver.js` using the Intersection Observer API to detect when user reaches the bottom of the page.

### Step 5: Update VideoFeed.jsx
Replace `useQuery` with `useInfiniteQuery` and connect the intersection observer to auto-load more videos on scroll.

## How to Run

**Terminal 1 - Backend:**
```bash
cd Practical4_TikTok_DB
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd TikTok_Frontend-main
npm run dev
```

Open `http://localhost:3000`