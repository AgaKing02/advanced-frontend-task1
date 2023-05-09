import './App.css';
import { Route, Link, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import DateSelector from './DateSelector';
import GetDataFromApi from './pages/GetDataFromApi';
import CountdownTimer from './CountDownTimer';

function App() {
  return (
    <div className="App">
      <div className="menu">
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/date-selector">DateSelector</Link>
            </li>
            <li>
              <Link to="/api">UserList</Link>
            </li>
            <li>
              <Link to="/count-down">Count Down Timer</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="App-intro">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/date-selector' element={<DateSelector/>}/>
          <Route path='/api' element={<GetDataFromApi/>}/>
          <Route path='/count-down' element={<CountdownTimer/>}/>


        </Routes>
      </div>
    </div>
  );
}

export default App;
