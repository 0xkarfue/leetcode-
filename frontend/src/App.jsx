import Home from "./pages/Home";
import Problems from "./pages/Problems";
import SolveProblem from "./pages/SolveProblem";
import Login from "./pages/Login";
import Signin from "./pages/Signin";

import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signin",
    element: <Signin/>
  },
  {
    path: "/SolveProblem",
    element: <SolveProblem/>
  },
  {
    path: "/problems",
    element: <Problems/>
  },
]);



function App() {

  /* Add routing here, routes look like -
     /login - Login page
     /signup - Signup page
     /problemset/all/ - All problems (see problems array above)
     /problems/:problem_slug - A single problem page
   */

  return (
  <>
  {/* <Home /> */}
  {/* <Problems/> */}
  {/* <SolveProblem/> */}
  {/* <Login/> */}
  {/* <Signin/> */}
  <RouterProvider router={router} />
  </>
)
}

export default App