const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
// Helper to get auth token
const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Get all videos with cursor-based pagination
export const getVideos = async ({ pageParam = null }) => {
  const params = new URLSearchParams();
  if (pageParam) params.append('cursor', pageParam);
  params.append('limit', '5');

  const response = await fetch(`${API_URL}/videos?${params}`, {
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeader(),
    },
  });

  if (!response.ok) throw new Error('Failed to fetch videos');
  return response.json();
};

// Get following videos with cursor-based pagination
export const getFollowingVideos = async ({ pageParam = null }) => {
  const params = new URLSearchParams();
  if (pageParam) params.append('cursor', pageParam);
  params.append('limit', '5');

  const response = await fetch(`${API_URL}/videos/following?${params}`, {
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeader(),
    },
  });

  if (!response.ok) throw new Error('Failed to fetch following videos');
  return response.json();
};

// Like or unlike a video
export const toggleLike = async (videoId) => {
  const response = await fetch(`${API_URL}/videos/${videoId}/like`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeader(),
    },
  });

  if (!response.ok) throw new Error('Failed to toggle like');
  return response.json();
};

// Get single video
export const getVideoById = async (id) => {
  const response = await fetch(`${API_URL}/videos/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeader(),
    },
  });

  if (!response.ok) throw new Error('Failed to fetch video');
  return response.json();
};