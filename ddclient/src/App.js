import Dashboard from './components/dashboard/Dashboard'
import CreateEvent from './components/createEvent/CreateEvent'
import SignUp from './components/auth/signUp/SignUp'
import Logout from './components/auth/logout/Logout'
import Login from './components/auth/login/Login'
import NotFound from './components/404'
import PrivateRoute from './components/auth/privateRoute/PrivateRoute'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import UserProvider from './components/auth/UserProvider'
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="appContainer">
        <Router>
          <UserProvider>
            <Switch>
              <Route exact path="/" comp={Dashboard}/>
              <PrivateRoute path="/signup" comp={SignUp}/>
              <PrivateRoute path="/logout" comp={Logout}/>
              <PrivateRoute path="/event/create" comp={CreateEvent}/>
              <Route path="/login" component={Login}/>
              <Route path="*" component={NotFound}/>
            </Switch>
          </UserProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
