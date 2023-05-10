import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/InfosecBridge" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user_profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
