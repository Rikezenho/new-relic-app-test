import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About } from './pages/About'
import { Users } from './pages/Users'
import { Home } from './pages/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav className="App-menu">
          <ul>
            <li>
              <Link to="/" id="home-link">Home</Link>
            </li>
            <li>
              <Link to="/about" id="about-link">About</Link>
            </li>
            <li>
              <Link to="/users" id="users-link">Users</Link>
            </li>
          </ul>
          </nav>
          <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
