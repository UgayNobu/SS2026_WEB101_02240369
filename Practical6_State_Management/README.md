# Practical 6: State Management with Zustand

## Introduction
A simple Todo List application built with React and Zustand for state management.

## Project Setup

### Prerequisites
- Node.js installed
- npm installed

### Installation
```bashnpx create-vite@latest todo-zustand
cd todo-zustand
npm install zustand

## Project Structuresrc/
├── components/
│   ├── TodoInput.jsx
│   ├── TodoItem.jsx
│   └── TodoList.jsx
├── store/
│   └── todoStore.js
├── App.jsx
└── index.jsx

## Features
- Add new todos
- Mark todos as completed
- Delete individual todos
- Clear all completed todos
- Total and completed todo count
- Persistent storage using localStorage

## How It Works

### Zustand Store
The store is created using Zustand's `create` function and contains:
- `todos` - array holding all todo items
- `addTodo` - adds a new todo
- `toggleTodo` - marks a todo as completed or not
- `removeTodo` - deletes a todo
- `clearCompleted` - removes all completed todos
- `persist` middleware - saves state to localStorage

### Components
- **TodoInput** - input form to add new todos
- **TodoItem** - displays individual todo with checkbox and delete button
- **TodoList** - renders all todos and clear completed button
- **App** - main component showing title and todo counts