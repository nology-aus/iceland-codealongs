import logo from "./logo.svg";
import "./App.css";

// localhost:3000/
// localhost:3000/students -> displays a list of students
// localhost:3000/students/:id -> single student that matches the id
// React Router Dom

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Students from "./containers/Students";
import Student from "./containers/Student";

function App() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route path="/students/:id">
                    <Student />
                </Route>
                <Route path="/students">
                    {/* localhost:3000/about */}
                    <Students />
                </Route>
                <Route path="/">
                    {/* localhost:3000/about */}
                    <h1>This is the home page</h1>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
