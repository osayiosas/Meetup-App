
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {AllMeetUps} from './pages/AllMeetUps';
import{ NewMeetUps} from './pages/NewMeetUps';
import {Favorites} from './pages/Favorites';
import Layout from './components/layout/Layout';



function App()
{
  return <div>
    <Router>

      <Layout >

      <Routes>
        
        <Route path='/' element={<AllMeetUps />} />
        <Route path='new-meetups' element={<NewMeetUps />} />
        <Route path='favourites' element={<Favorites />} />

        </Routes>
        
       </Layout>
    </Router>
  </div>;
}

export default App;
