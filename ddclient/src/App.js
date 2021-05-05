import Dashboard from './components/dashboard/Dashboard'
import CreateEvent from './components/createEvent/CreateEvent'
import SignUp from './components/auth/signUp/SignUp'
import Logout from './components/auth/logout/Logout'
import Login from './components/auth/login/Login'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <Router>
            <Route exact path="/"><Dashboard/></Route>
            <Route path="/signup"><SignUp/></Route>
            <Route path="/logout"><Logout/></Route>
            <Route path="/login"><Login/></Route>
            <Route path="/event/create"><CreateEvent/></Route>
          </Router>
      </div>
    </div>
  );
}

export default App;
