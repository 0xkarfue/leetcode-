/*
 * Temporary problems array schema
 */

import Home from "./pages/Home";
import Problems from "./pages/Problems";
import SolveProblem from "./pages/SolveProblem";
import Login from "./pages/Login";
import Signin from "./pages/Signin";




function App() {

  /* Add routing here, routes look like -
     /login - Login page
     /signup - Signup page
     /problemset/all/ - All problems (see problems array above)
     /problems/:problem_slug - A single problem page
   */

  return (
  <>
  <Home />
  <Problems/>
  <SolveProblem/>
  <Login/>
  <Signin/>
  </>
)
}

// A demo component
function ProblemStatement(props) {
  const title = props.title;
  const acceptance = props.acceptance;
  const difficulty = props.difficulty;

  return <tr>
      <td>
          {title}
      </td>
      <td>
          {acceptance}
      </td>
      <td>
          {difficulty}
      </td>
  </tr>
}
export default App