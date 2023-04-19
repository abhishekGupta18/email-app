import "./App.css";

import { Routes, Route } from "react-router-dom";

import { LandingPage } from "./Pages/LandingPage";
import { Inbox } from "./Pages/Inbox";
import { Sent } from "./Pages/Sent";
function App() {
  return (
    <div className="App">
      <LandingPage />
      <Routes>
        <Route path="/inboxMail" element={<Inbox />} />
        <Route path="/sentMail" element={<Sent />} />
      </Routes>
    </div>
  );
}

export default App;
