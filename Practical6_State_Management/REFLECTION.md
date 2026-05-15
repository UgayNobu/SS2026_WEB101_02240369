# Reflection - Practical 6: State Management with Zustand

## Documentation

### Main Concepts Applied
- **Zustand** - a lightweight state management library for React
- **Store** - a central place that holds all application state and actions
- **State** - the `todos` array that holds all todo items
- **Actions** - functions like `addTodo`, `toggleTodo`, `removeTodo`, and `clearCompleted` that modify state
- **Selectors** - using `useTodoStore(state => state.todos)` to subscribe to specific parts of the store
- **Persist middleware** - saves state to localStorage so todos survive page refreshes

## Reflection

### What I Learned
- How Zustand simplifies state management compared to prop drilling or React Context
- How to create a central store with both state and actions in one place
- How components can directly access and update global state without passing props
- How to use the `persist` middleware to save state to localStorage
- How Zustand only re-renders components that subscribe to the specific piece of state that changed

### Challenges Faced

#### Challenge 1: File Extension Issues
Vite does not process JSX syntax in `.js` files. The document specified `App.js` and `index.js` but Vite requires `.jsx` extension for files containing JSX. I had to rename them to `App.jsx` and `index.jsx` and update the reference in `index.html`.

#### Challenge 2: React Import Warning
All component files showed a warning `'React' is defined but never used`. This is because modern React (v17+) no longer requires importing React to use JSX. I fixed this by removing `import React from 'react'` from all component files.

### Conclusion
Zustand is a simple and powerful state management solution. Unlike Redux, it requires very little boilerplate and is easy to understand. The `persist` middleware makes it simple to add localStorage support with just a few lines of code.