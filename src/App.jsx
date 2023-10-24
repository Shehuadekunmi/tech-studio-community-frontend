import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import JobRequirements from './pages/JobRequirements'
import "./App.css";
import Home from './pages/lading page/Home'
import Talent from './pages/find talent/Talent'
import Dashboard from './pages/Dashboard/Dashboard';
import Community from './pages/Community/Community';
import PostDetails from './pages/postdetails/PostDetails';
import ProjectList from './pages/ProjectList/ProjectList';
import Profile from './pages/profile/ProfileInternal';
import Edit from './pages/editeProfile/Edit';
import { useState } from 'react';
import Login from './components/Login'
import GuestSignUp from "./components/GuestSignUp"
import PasswordReset from "./components/PasswordReset"
import NewPassword from "./components/NewPassword"
import EmailConfirmation from "./pages/EmailConfirmation";
import EmailResend from "./pages/EmailResend";
import InternalPage from './pages/InternalPage';
import ProjectUpload from './pages/Projectupload/ProjectUpload';

function App() {
  const [jobPosterData, SetJobPosterData]= useState({})
  return (
    < >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/talent" element={<Talent />} />
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='/postdetails' element={<PostDetails/>}/>
          <Route path='/projectlist' element={<ProjectList/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='/edit' element={<Edit/>}/>
          <Route path="/profile" element={<Profile/>} />
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
          <Route path='/projectupload' element={<ProjectUpload/>}/>
        </Routes>
      </Router>
    </>)
}

export default App;
