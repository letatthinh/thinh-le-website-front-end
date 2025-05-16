# General notes

This React app is being built from scratch using Vite build tool. Create React App has been **deprecated** for new apps, and encouraging existing apps to migrate to a framework, or to migrate to a build tool like Vite, Parcel, or RSBuild.

# Create new React app with Vite

Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.

```terminal
npm create vite@latest
```

# Deployment

Create a new account on [Vercel](https://vercel.com/) and follow the instructions.

# Eslint

## Install and configure ESLint

```terminal
npm init @eslint/config@latest
```

[eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) is an ESLint plugin that includes rules specifically for React projects.

## ESLint Stylistic

### `@stylistic/eslint-plugin-js`

JavaScript stylistic rules for ESLint, migrated from eslint core.

```terminal
npm i -D @stylistic/eslint-plugin-js
```

### `@stylistic/eslint-plugin-jsx`

JSX stylistic rules for ESLint, migrated from eslint-plugin-react. Decoupled from React and supports generic JSX syntax.

```terminal
npm i -D @stylistic/eslint-plugin-jsx
```

## Run eslint

Run this command in the terminal `npm run lint`. Remember to set `"lint": "eslint ."` in the `package.json` file.

# Project structure

## Main flow

The base template is written in the `index.html` file. The browser loads this file first, which includes a
`<div id="root">` that acts as the mounting point for the React application. It then loads the `main.jsx` file as the
first JavaScript entry point. Inside `main.jsx`, the React app is initialized by rendering the root component —
`App.jsx` — into the DOM. `App.jsx` is the first React component and serves as the top-level component of the
application.

# Global state management with Redux

A JS library for predictable and maintainable global state management.<br>
Install Redux Toolkit and React-Redux:

```terminal
npm install @reduxjs/toolkit react-redux
```

Redux components:
- Store: The central place that holds the application's state and allows state access, updates, and subscription to changes.
- Slice: A portion of the Redux state and logic.
- Reducers: Pure functions that take the current state and an action, then return the new state based on the action type.
- Actions: Plain objects describing what happened in the app, usually containing a `type` and an optional `payload`.
- Immer library: A library used by Redux Toolkit to allow writing immutable update logic in a more concise, mutable-looking style.

## Select structured pieces of state with Reselect

Select multiple slices from state.

```terminal
npm install reselect
```

# CSS with Tailwind CSS

Follow the instructions on the [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite) website.

# Icons with Hugeicons

Follow the instructions on the [Huge Icons](https://docs.hugeicons.com/license/activate-license) website.

# Navigation and routing with React Router

Follow the instructions on the [React Router](https://reactrouter.com/start/framework/installation) website.

# Form components with HeadlessUI

```terminal
npm install @headlessui/react
```

# Configurations

## `jsconfig`

The `jsconfig.json` file specifies the root files and the options for the features provided by the JavaScript language service.

View the [TypeScript compilerOptions documentation](https://www.typescriptlang.org/tsconfig/#compilerOptions) for more information.

Notes:
- This supports the auto import function in vscode.

## VsCode

### Auto sort imports

Modify this setting: `"source.organizeImports": true`.

# Coding handbook

## Kill active process by port and PID

```terminal
$ netstat -ano | findstr :5173
$ taskkill /pid 12345 /f
```
