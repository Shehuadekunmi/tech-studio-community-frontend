import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import GuestSignUp from "./components/GuestSignUp";
import PasswordReset from "./components/PasswordReset";
import NewPassword from "./components/NewPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/GuestSignUp" element={<GuestSignUp />} />
          <Route path="/PasswordReset" element={<PasswordReset />} />
          <Route path="/NewPassword" element={<NewPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
