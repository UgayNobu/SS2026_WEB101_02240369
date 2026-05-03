# Reflection - Practical 4: Connecting TikTok Frontend to Backend

## a) Documentation - Main Concepts Applied

### 1. Axios API Client
I used axios to connect frontend and backend. I made one main api file so I dont have to write same code again and again.

I also used interceptors. Request one adds token automatically, and response one checks if token expired and sends user back to login. Took me some time to understand this part not gonna lie.

### 2. JWT Authentication
I used JWT for login system. Token is saved in localStorage.

I made authContext.jsx to manage login state. So when user login once, it stays available in whole app. Before this I was kinda confused how apps remember users lol.

### 3. React Context API
Instead of passing props everywhere (which was getting very annoying), I used React Context.

I wrapped the whole app using AuthProvider in layout.js so I can access auth data anywhere. This made things much easier.

### 4. Service Layer Pattern
I separated api calls into different files like:
- videoService.js
- userService.js

Honestly this made code look more clean, otherwise everything was mixed and messy.

### 5. Infinite Scroll with React Query
I used useInfiniteQuery from react-query.

This loads videos while scrolling, not all at once. At first I didnt really understand cursor pagination but after trying few times it make sense.

### 6. Supabase Storage
I used supabase storage to upload videos and thumbnails.

Files go directly to storage, and only the link is saved in database. This is better than storing full files in DB.

## b) Reflection

### What I Learned
In this practical I learned many things:

- how to connect next.js frontend with express backend using axios  
- how jwt auth actually works (before I was just copying 😅)  
- how to use react context for global state  
- how prisma connects to postgres in supabase  
- how pagination works using cursor  
- how .env.local works in nextjs  

### Challenges Faced

#### Challenge 1: Database Connection
This part was really annoying.

Prisma was not connecting to supabase and it kept showing "Tenant or user not found". I was stuck here for long time.

Then I found out:
- username format should be like postgres.[project-id]  
- need to add ?pgbouncer=true in DATABASE_URL  
- DIRECT_URL also needed for migration  
- college wifi was blocking it so I used hotspot  

#### Challenge 2: node_modules Problem
My project suddenly stopped working for no reason.

node_modules got corrupted (idk how honestly). So I deleted:
- node_modules  
- .next  

Then installed again and it worked fine.

#### Challenge 3: Supabase Project Paused
My old supabase project was not working.

It was paused because I didnt use it for long time (more than 90 days). So yeah I had to create new one and setup everything again which was kinda annoying.

### How I Overcame Them
- checked connection string properly from supabase dashboard (before I was just guessing)  
- used mobile hotspot to fix network issue  
- reinstalled node_modules when things broke  
- created new supabase project and configured again  