import CalendarContainer from './components/calendarContainer/CalendarContainer'
import DetailContainer from './components/detailContainer/DetailContainer'
import CreateEvent from './components/createEvent/CreateEvent'
import SignUp from './components/auth/signUp/SignUp'
import Logout from './components/auth/logout/Logout'
import Login from './components/auth/login/Login'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Route exact path="/">
            <DetailContainer/>      
            <CalendarContainer/>
          </Route>
          <Route path="/signup"><SignUp/></Route>
          <Route path="/logout"><Logout/></Route>
          <Route path="/login"><Login/></Route>
          <Route path="/event/create"><CreateEvent/></Route>
        </Router>
        
    </div>
  );
}

export default App;
