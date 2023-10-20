import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import GuestSignUp from "./components/GuestSignUp";
import PasswordReset from "./components/PasswordReset";
import NewPassword from "./components/NewPassword";
import EmailConfirmation from "./pages/EmailConfirmation";
import EmailResend from "./pages/EmailResend";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/email-confimation/:uid/:token" element={<EmailConfirmation />} />
          <Route path="/resend-email-confimation/:uid" element={<EmailResend/>} />
          <Route path="/GuestSignUp" element={<GuestSignUp />} />
          <Route path="/PasswordReset" element={<PasswordReset />} />
          <Route path="/NewPassword" element={<NewPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
