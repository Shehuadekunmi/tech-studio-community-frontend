import './App.css'
import Home from './pages/lading page/Home'
import Talent from './pages/find talent/Talent'
import Profile from './pages/Profile/Profile'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/talent" element={<Talent />} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
