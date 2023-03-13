
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {AllMeetUps} from './pages/AllMeetUps';
import{ NewMeetUps} from './pages/NewMeetUps';
import {Favorites} from './pages/Favorites';
import { Navbar } from './components/layout/Navbar';



function App()
{
  return <div>
    <Router>

      <Navbar />

      <Routes>
        
        <Route path='/' element={<AllMeetUps />} />
        <Route path='new-meetups' element={<NewMeetUps />} />
        <Route path='favourites' element={<Favorites />} />

      </Routes>
    </Router>
  </div>;
}

export default App;
