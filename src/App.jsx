import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SplashScreen from "./components/splashScreen/SplashScreen";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import Home from "./pages/Home/Home";
import MyErrorBoundary, { NotFoundPage } from "./components/errorPage/ErrorBoundary"; 
import Layout from "./components/navigation/layout/Layout"
import Dashboard from "./pages/Dashboard/Dashoard";
import Startups from "./pages/Dashboard/Startups";
import { useDarkMode } from './context/DarkModeContext';

function App() {
  const { isAuthenticated } = useSelector((state) => state.user);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
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
        <Route path="/dashboard" element={<PrivateRoute isLoggedIn={isAuthenticated}><Layout><Dashboard isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/></Layout></PrivateRoute>}/>
        <Route path="/startups" element={<PrivateRoute isLoggedIn={isAuthenticated}><Layout><Startups isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/></Layout></PrivateRoute>}/>
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
