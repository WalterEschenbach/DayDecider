import CalendarContainer from './components/calendarContainer/CalendarContainer'
import DetailContainer from './components/detailContainer/DetailContainer'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
        <DetailContainer/>      
        <CalendarContainer/>
    </div>
  );
}

export default App;
