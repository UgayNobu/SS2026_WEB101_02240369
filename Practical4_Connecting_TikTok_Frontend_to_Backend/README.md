# Practical 4: Connecting TikTok Frontend to Backend

## Overview
In this practical, we connected a Next.js frontend to an Express.js backend, implementing user authentication, video display, and social interactions.

## Setup Instructions

### Prerequisites
- Node.js installed
- Supabase account
- Git

### Backend Setup
1. Clone the repository:
git clone https://github.com/syangche/TikTok_Server.git

2. Install dependencies:
cd TikTok_Server-main
npm install

3. Create `.env` file:
PORT=8000
NODE_ENV=development
DATABASE_URL="postgresql://postgres.[project-id]:[password]@aws-1-ap-south-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.[project-id]:[password]@aws-1-ap-south-1.pooler.supabase.com:5432/postgres"
JWT_SECRET="your_secret_key"
SUPABASE_URL="https://[project-id].supabase.co"
SUPABASE_ANON_KEY="your_anon_key"

4. Push database schema:
npx prisma db push
npx prisma generate

5. Start the server:
npm run dev

### Frontend Setup
1. Clone the repository:
git clone https://github.com/syangche/TikTok_Frontend.git

2. Install dependencies:
cd TikTok_Frontend-main
npm install axios jwt-decode react-hot-toast

3. Create `.env.local` file:
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_SUPABASE_URL=https://[project-id].supabase.co
NEXT_PUBLIC_SUPABASE_PUBLIC_KEY=your_anon_key

4. Start the frontend:
npm run dev

## Features Implemented

### Part 1: API Configuration and Authentication
- Axios API client with request interceptors
- JWT-based authentication
- Login and registration forms
- Auth modal with tab switching

### Part 2: Video Feed Integration
- Real video feed from backend
- Like/unlike functionality
- Comment interface
- Video autoplay with intersection observer

### Part 3: User Discovery and Following
- Explore Users page
- Follow/unfollow functionality
- Following feed (personalized)
- User profile pages