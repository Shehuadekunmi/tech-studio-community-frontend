import './App.css'
import Home from './pages/lading page/Home'
import Index from './pages/find talent/Talent'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Index/>}/>
        </Routes>
      </Router>
     <Home/>
    </>
  );
}

export default App;
