import './App.css'
import Home from './pages/lading page/Home'
import Talent from './pages/find talent/Talent'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Community from './pages/Community/Community';
import PostDetails from './pages/postdetails/PostDetails';
import ProjectList from './pages/ProjectList/ProjectList';
import Profile from './pages/profile/Profile';
import Edit from './pages/editeProfile/Edit';

function App() {

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
