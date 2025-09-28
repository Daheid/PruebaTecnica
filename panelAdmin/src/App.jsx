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
import Tabla from "./components/tabla"

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
              <div className="flex min-h-screen">
                <Navbar />
                <div className="flex-1 p-6">
                  <h1 className="text-2xl font-bold mb-6">
                    Tabla de transacciones
                  </h1>
                  <Tabla />
                </div>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
