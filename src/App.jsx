import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SplashScreen from "./components/splashScreen/SplashScreen";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import Home from "./pages/Home/Home";
import MyErrorBoundary, { NotFoundPage } from "./components/errorPage/ErrorBoundary";
import { DarkModeProvider, useDarkMode } from './context/DarkModeContext';

function App() {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <MyErrorBoundary>
      <DarkModeProvider> {/* Wrap the app with DarkModeProvider */}
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<SplashScreen />} />
            <Route 
              path="/home" 
              element={<Home />} 
            />
            <Route 
              path="/login"
              element={
                isAuthenticated ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <LoginPage />
                )
              }
            />
            <Route 
              path="/signup" 
              element={<SignupPage />} 
            />
          </Routes>
        </Router>
      </DarkModeProvider>
    </MyErrorBoundary>
  );
}

// PrivateRoute ensures restricted access for authenticated users
function PrivateRoute({ children, isLoggedIn }) {
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

export default App;
