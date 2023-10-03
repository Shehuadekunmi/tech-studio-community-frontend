import "./App.css";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Index from './pages/find talent/Talent'
// fix this route link,  route path should not be  "/Index"


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/Index' element={<Index/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
