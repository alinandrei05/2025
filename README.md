# 2025

Frontend (React 19 + Vite + TypeScript)
Initialize Vite with React and TypeScript

npm create vite@latest my-app --template react-ts
cd my-app
npm install

Install essential frontend dependencies

npm install react@beta react-dom@beta
Additional useful packages

UI Library: shadcn/ui or chakra-ui

State Management: zustand or redux-toolkit
React Router: react-router-dom
Form Handling: react-hook-form
Validation: zod
API Client: axios
CSS: tailwindcss (if preferred)
Example installation:

npm install react-router-dom axios zod react-hook-form

Backend (Node.js + Express + Live Reload)
Initialize Node.js project

mkdir server && cd server
npm init -y

Install Express and other backend dependencies

npm install express cors dotenv
For live reload (nodemon)

npm install --save-dev nodemon

Setup TypeScript for the backend

npm install --save-dev typescript ts-node @types/node @types/express

Create tsconfig.json

{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  }
}

Add nodemon.json

{
  "watch": ["src"],
  "ext": "ts",
  "exec": "ts-node src/index.ts"
}

Run the backend

npx nodemon
This setup will give you a fully functional React 19 + TypeScript frontend and a Node.js + Express backend with live reload. Let me know if you need more features like authentication, database setup, or testing frameworks! 🚀
