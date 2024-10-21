# 📝 NotesApp

Welcome to **NotesApp**! This is a simple yet powerful note-taking app that stores your notes in local storage. You can easily add, update, delete, copy, and manage your notes with undo and redo functionality. 

## 🌟 Features

- 🏠 **Home Page**: Add or update notes.
- 🗒️ **Notes Page**: Display all notes.
- 📄 **Specific Note Page**: Render specific notes.
- ✏️ **Add, Edit, Delete, Copy Notes**: Manage your notes effortlessly.
- 🔄 **Undo/Redo**: Undo and redo note changes during creation.
- 📋 **Copy Note Content**: Easily copy the content of your notes.

## 🚀 Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/mohammed-iqramul/notesapp.git
    cd notesapp
    ```

2. **Install dependencies**:
    ```sh
    npm install
    # or
    yarn install
    ```

3. **Start the development server**:
    ```sh
    npm run dev
    # or
    yarn dev
    ```

## 🛠️ Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Redux Toolkit](https://redux-toolkit.js.org/) - The official, recommended way to write Redux logic.
- [React Router](https://reactrouter.com/) - Declarative routing for React.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling.
- [React Beautiful DnD](https://github.com/atlassian/react-beautiful-dnd) - Beautiful and accessible drag and drop for lists.
- [React Hot Toast](https://react-hot-toast.com/) - Smoking hot React notifications.

## 📁 Project Structure

Here is the basic structure of the project:
```
notesapp/ 
├── node_modules/ 
├── public/ 
├── src/ 
│ ├── assets/ 
│ ├── components/ 
│ │ ├── Footer.jsx 
│ │ ├── Home.jsx 
│ │ ├── Navbar.jsx 
│ │ ├── Note.jsx 
│ │ ├── Notes.jsx 
│ ├── redux/ 
│ │ ├── notesSlice.js 
│ ├── App.jsx 
│ ├── main.jsx 
│ └── index.css 
│ ├── store.js 
├── package.json 
└── README.md
```

## 📜 Scripts

- `dev`: Starts the development server.
- `build`: Builds the app for production.
- `lint`: Runs ESLint to check for linting errors.
- `preview`: Previews the production build locally.

### 📦 Dependencies
- **@reduxjs/toolkit**: A powerful library for managing application state with Redux.
- **lucide-react**: Icon set for React that provides various UI icons.
- **react**: The core React library for building user interfaces.
- **react-dom**: DOM bindings for React.
- **react-hot-toast**: Notifications system for React.
- **react-redux**: Official React bindings for Redux.
- **react-router-dom**: Provides routing functionalities in React apps.

### 📦 Dev Dependencies
- **@eslint/js**: ESLint configurations for JavaScript.
- **@types/react**: TypeScript type definitions for React (if you are using TypeScript).
- **@types/react-dom**: TypeScript type definitions for React DOM (if you are using TypeScript).
- **@vitejs/plugin-react**: Official Vite plugin for React, enabling Fast Refresh using Babel.
- **autoprefixer**: PostCSS plugin that adds vendor prefixes automatically.
- **eslint**: A tool for identifying and fixing problems in JavaScript code.
- **eslint-plugin-react**: ESLint plugin for React-specific linting rules.
- **eslint-plugin-react-hooks**: Linting rules for React Hooks.
- **eslint-plugin-react-refresh**: Linting rules for React Fast Refresh.
- **globals**: Global variables configuration for ESLint.
- **postcss**: A tool for transforming CSS with JavaScript plugins.
- **tailwindcss**: Utility-first CSS framework.
- **vite**: Build tool for fast and optimized web development.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/notesapp/issues).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgements

- Thanks to the developers of the libraries and tools used in this project.
