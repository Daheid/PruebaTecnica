// components/loginFormulario.jsx
import React from "react"
import { useNavigate } from "react-router-dom"
import Logo from "../assets/logo.svg"
import { Login } from "../hooks/login"

const LoginForm = () => {
  const navigate = useNavigate()
  const { Datos, loading, error, handleChange, handleSubmit } = Login()

  // Función que se ejecuta cuando el login es exitoso
  const handleLoginSuccess = () => {
    navigate("/dashboard")
  }

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 border border-gray-200">
      {/* Logo  y encabezado*/}
      <div className="flex justify-center mb-6">
        <img src={Logo} alt="Logo" className="w-100 h-100" />
      </div>

      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Bienvenido!</h1>
      </div>

      {/* aqui saldran los mensajes de error */}
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {/* Formulario */}
      <form
        onSubmit={(e) => handleSubmit(e, handleLoginSuccess)}
        className="space-y-6"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nombre de usuario
          </label>
          <input
            name="nombre"
            type="text"
            placeholder="admin"
            value={Datos.nombre}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required
            disabled={loading}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            name="password"
            type="password"
            placeholder="admin"
            value={Datos.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Cargando..." : "Sign In"}
        </button>
      </form>
    </div>
  )
}

export default LoginForm
