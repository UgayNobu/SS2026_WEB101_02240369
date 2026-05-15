'use client';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { getVideos } from '../../services/videoService';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
export default function VideoFeed() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ['videos'],
    queryFn: getVideos,
    getNextPageParam: (lastPage) => lastPage.pagination?.nextCursor ?? undefined,
  });

  const handleLoadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const bottomRef = useIntersectionObserver(handleLoadMore, {
    threshold: 0.5,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">Loading videos...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">Failed to load videos. Please try again.</p>
      </div>
    );
  }

  const videos = data?.pages.flatMap((page) => page.videos) ?? [];

  return (
    <div className="flex flex-col items-center">
      {videos.length === 0 ? (
        <p className="text-gray-500 mt-10">No videos found.</p>
      ) : (
        videos.map((video) => (
          <div
            key={video.id}
            className="w-full max-w-lg border-b border-gray-200 py-6 px-4"
          >
            {/* User Info */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                {video.user?.avatar ? (
                  <img
                    src={video.user.avatar}
                    alt={video.user.username}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-pink-400 flex items-center justify-center text-white font-bold">
                    {video.user?.username?.[0]?.toUpperCase()}
                  </div>
                )}
              </div>
              <div>
                <p className="font-bold text-sm">@{video.user?.username}</p>
                <p className="text-gray-500 text-xs">{video.user?.name}</p>
              </div>
            </div>

            {/* Caption */}
            <p className="text-sm mb-3">{video.caption}</p>

            {/* Video Player */}
            <div className="w-full rounded-xl overflow-hidden bg-black">
              <video
                src={video.videoUrl}
                controls
                className="w-full max-h-96 object-contain"
              />
            </div>

            {/* Stats */}
            <div className="flex gap-4 mt-3 text-sm text-gray-600">
              <span>❤️ {video.likeCount ?? 0} likes</span>
              <span>💬 {video.commentCount ?? 0} comments</span>
            </div>
          </div>
        ))
      )}

      {/* This div is watched by the Intersection Observer */}
      <div ref={bottomRef} className="py-4">
        {isFetchingNextPage && (
          <p className="text-gray-400 text-sm">Loading more videos...</p>
        )}
        {!hasNextPage && videos.length > 0 && (
          <p className="text-gray-400 text-sm">You've reached the end! 🎉</p>
        )}
      </div>
    </div>
  );
}