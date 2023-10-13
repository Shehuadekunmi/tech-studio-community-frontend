import JobRequirements from './pages/JobRequirements'
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/lading page/Home'
import Talent from './pages/find talent/Talent'
import { useState } from 'react';
import MultipleChoiceInput from './Components/Choice';

function App() {
  const [jobPosterData, SetJobPosterData]= useState({})
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/choice' element={<MultipleChoiceInput/>}/>
          <Route path="/talent" element={<Talent SetJobPosterData={SetJobPosterData}/>} />
          <Route path='/jobrequirement' element={<JobRequirements jobPosterData={jobPosterData}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
