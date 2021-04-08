import CalendarContainer from './components/calendarContainer/CalendarContainer'
import DetailContainer from './components/detailContainer/DetailContainer'
import CreateEvent from './components/createEvent/CreateEvent'
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
          <Route path="/login">Login</Route>
          <Route path="/event/create"><CreateEvent/></Route>
        </Router>
        
    </div>
  );
}

export default App;
