import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SplashScreen from "./components/splashScreen/SplashScreen";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import Home from "./pages/Home/Home";
import MyErrorBoundary, { NotFoundPage } from "./components/errorPage/ErrorBoundary"; 


function App() {
  const { isAuthenticated } = useSelector((state) => state.user);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <MyErrorBoundary>
    <Router>
      {/* <Toast /> */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>}/>
        <Route path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <LoginPage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
            )
          }
        />
        <Route path="/signup" element={<SignupPage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>}/>
      </Routes>
    </Router>
    </MyErrorBoundary>
  );
}

// PrivateRoute ensures restricted access for authenticated users
function PrivateRoute({ children, isLoggedIn }) {
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

export default App;
