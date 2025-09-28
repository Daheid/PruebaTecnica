// App.jsx
import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import LoginForm from "./components/loginFormulario"
import Dashboard from "./components/Dashboard"
import Navbar from "./components/navbar"

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("authToken")
  return token ? children : <Navigate to="/" />
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white flex items-center justify-center p-4">
              <LoginForm />
            </div>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Navbar />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
