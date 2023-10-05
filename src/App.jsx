import "./App.css";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Index from './pages/find talent/Talent'
import SubmissionModal from "./Components/SubmissionModal";
import Header2 from "./Components/Header2";
import Footer from "./Components/Footer";
// fix this route link,  route path should not be  "/Index"


function App() {

  return (
    <>
      <Router>
        <Header2 /> 
        <Footer/>
        <Routes>
          <Route path='/Index' element={<Index/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
