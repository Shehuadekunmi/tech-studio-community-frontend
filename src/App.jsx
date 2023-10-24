import "./App.css";
import Index from "./pages/find talent/Talent";
import SubmissionModal from "./Components/SubmissionModal";
import Header2 from "./Components/Header2";
import Footer from "./Components/Footer";
// fix this route link,  route path should not be  "/Index"

import Home from "./pages/lading page/Home";
import Talent from "./pages/find talent/Talent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DefaultContext } from "react-icons/lib";
import DefaultLayout from "./Layout/DefaultLayout";
import InternalModal from "./pages/CommunityInternalModal/InternalModal";
import NotificationModal from "./pages/CommunityInternalModal/NotificationModal";

function App() {
  return (
    <>
      <Router>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/talent" element={<Talent />} />
            <Route path="/internal" element={<InternalModal />} />
            <Route path="/notification" element={<NotificationModal />} />
          </Routes>
        </DefaultLayout>
      </Router>
    </>
  );
}

export default App;
