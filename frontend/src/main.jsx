import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Home from './pages/Home.jsx'
// import Login from './pages/Login.jsx'
// import Signin from './pages/Signin.jsx'
// import Problems from './pages/Problems.jsx'
// import SolveProblem from './pages/SolveProblem.jsx'

// import { createBrowserRouter, RouterProvider, } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/login",
//     element: <Login/>
//   },
//   {
//     path: "/signin",
//     element: <Signin/>
//   },
//   {
//     path: "/SolveProblem",
//     element: <SolveProblem/>
//   },
//   {
//     path: "/problems",
//     element: <Problems/>
//   },
// ]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </StrictMode>,
)
