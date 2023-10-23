import JobRequirements from './pages/JobRequirements'
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/lading page/Home'
import Talent from './pages/find talent/Talent'
import { useState } from 'react';
import Login from './components/Login'
import GuestSignUp from "./components/GuestSignUp"
import PasswordReset from "./components/PasswordReset"
import NewPassword from "./components/NewPassword"
import EmailConfirmation from "./pages/EmailConfirmation";
import EmailResend from "./pages/EmailResend";
import InternalPage from './pages/InternalPage';

function App() {
  const [jobPosterData, SetJobPosterData]= useState({})
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/talent" element={<Talent SetJobPosterData={SetJobPosterData}/>} />
          <Route path="/internalpage" element={<InternalPage />} />
          <Route path='/jobrequirement' element={<JobRequirements jobPosterData={jobPosterData}/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/email-confimation/:uid/:token/" element={<EmailConfirmation />} />
          <Route path="/resend-email-confimation/:uid/" element={<EmailResend/>} />
          <Route path="/GuestSignUp" element={<GuestSignUp />} />
          <Route path="/PasswordReset" element={<PasswordReset />} />
          <Route path="/NewPassword" element={<NewPassword />} />
        </Routes>
      </Router>
    </>)
}

export default App;
