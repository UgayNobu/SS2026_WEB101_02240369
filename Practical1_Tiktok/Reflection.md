# Reflection - Practical 1: TikTok Clone

## What I Built
I built a TikTok clone web application using Next.js and Tailwind CSS.
The app has a sidebar, video feed, and login and signup forms.

## Main Concepts I Applied

### 1. Next.js
I used NExt.js for the first time and i learned that Next.js is using a folder based routing system which that every folder inside the app directory directly goes to page.

### 2. Components
I now know the breaking of pages into useful parts called compoents like where I made a VideoCard component that can be used for each video in the feeds for you page.

### 3. Tailwind CSS
Much easier to use Tailwind CSS then noraml CSS that allows me to style elements using class names which was a bit difficult at first but now much better.

### 4. React Hook Form
This allowed me to validate user inputs for the login and singup forms whether the email is ligit or if the password is of correct length.

## What I Learned
- To set up a Next.js project from start
- To make navigatable pages 
- To created layouts to be used by all pages
- To use icons from React Icons library
- TO verify forms by using React Hook Form

## Challenges I Faced

### Challenge 1: Error in JSX
I wrote "Don't have an account?" in my login page where it gave me an error because JSX does not allow apostrophes in plain text directly.

**How I fixed it:**
I replaced the apostrophe with `&apos;` which is the HTML code for an apostrophe.

### Challenge 2: Login Button Not Working
The login button was not taking me anywhere when I clicked on it.

**How I fixed it:**
I had forgotten to wrap the button inside a `<Link>` tag from Next.js to make it take to the login page.

### Challenge 3: Understanding File Structure
Fron the satrting itself I could not undersatnd why or when to cd into files in terminal.

**How I fixed it:**
I had to learn the files structure properly and relate or connect them to make sense of it where later I learned that each folders had differnt roles and it helped me re-organize the poject better.

## Conclusion
As everything was new to me ,this practical helped me understand the basics of building a simple web application using React and Next.js.For the first time i was able to make a working web application like TikTok with multiple pages, a sidebar, and working forms.I look forward to learning more in the next practicals.