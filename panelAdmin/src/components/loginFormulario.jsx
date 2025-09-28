import React from "react"
import Logo from "../assets/logo.svg"

const LoginForm = () => {
  return (
    // QUITAR flex y centrado - eso ya lo hace App.jsx
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 border border-gray-200">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img src={Logo} alt="Logo" className="w-100 h-100" />
      </div>

      {/* Encabezado */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Bienvenido!</h1>
      </div>

      {/* Formulario */}
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nombre de usuario
          </label>
          <input
            type="text"
            placeholder="admin"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="admin"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all font-medium"
        >
          Sign In
        </button>
      </form>
    </div>
  )
}

export default LoginForm
