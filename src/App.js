import "./App.css";
import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen bg-richblack-900 flex flex-col h-screen">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />}/>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/dashboard" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
            </PrivateRoute>
          } />
        </Routes>
    </div>
  )
}

export default App;
