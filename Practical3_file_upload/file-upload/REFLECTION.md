# Reflection - Practical 3: File Upload

## a) Documentation - Main Concepts Applied

### React Hook Form
I used react-hook-form to manage the form inputs. It handles showing error messages when the user forgets to fill something in.

### File Validation
I added rules to check the file before uploading. The file must be a JPEG, PNG, or PDF and must be smaller than 5MB. If not, an error message is shown.

### Multipart Form Data
Files cannot be sent like normal text. I used FormData to package the file and other fields together to send to the server.

### API Route in Next.js
I created src/app/api/upload/route.js to handle the backend. It receives the file and saves it inside the public/uploads folder with a unique name.

### Upload Progress Tracking
I used axios which has an onUploadProgress feature. This tells you how much of the file has uploaded and I used it to update a progress bar on the screen.

### Drag and Drop
I used the react-dropzone library to create the drag and drop area. It accepts or rejects files based on the type and size rules.

---

## b) Reflection

### What I Learned

I had never built a file upload feature before. I learned that uploading a file is more complicated than a normal form because you need FormData and a backend route to handle it.

I also learned that Next.js lets you create backend API routes inside the same project without needing a separate server, which was really convenient.

### Challenges I Faced

**Challenge 1 - Understanding the folder structure**
I was confused about where to put the files because the project uses the App Router with src/app/ folders. I overcame this by following the instructions carefully and checking the folder structure.

**Challenge 2 - ESLint warnings**
After setting up the project I noticed yellow underlines on the img tag and thought something was broken. I checked the terminal and saw "Compiled in 84ms" which meant the app was working fine. The warnings were just suggestions from ESLint, not real errors.

**Challenge 3 - Centering the form**
The form was showing on the left side of the page. I fixed it by changing the className of the outer div in page.js from "container mx-auto p-4" to "min-h-screen flex flex-col items-center justify-center p-4".