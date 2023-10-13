import JobRequirements from './pages/JobRequirements'
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/lading page/Home'
import Talent from './pages/find talent/Talent'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/jobrequirement' element={<JobRequirements/>} />
          <Route path="/" element={<Home />} />
          <Route path="/talent" element={<Talent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
