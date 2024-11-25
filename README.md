# Task manager

## Running

You will need node v22.11.0

Run the following commands in your favourite shell.
```shell
git clone https://github.com/yaxley-peaks/task-manager.git
cd task-manager
npm install
npm run dev
```

## Component structure explanation

- `App.jsx`: Primary parent component, provides state.
  I would have used `useReducer`s but I was asked to use `useState` to manage state
- `AddTask`: Form to add a new task.
- `TaskItem`: Manages a single task. Editing and deleting.
- `TaskList`: Renders a list of `TaskItem`s.

## Bonus items implemented
- [X] Search bar
- [X] Dark mode (Use system setting).
- [X] Items persist in localstorage