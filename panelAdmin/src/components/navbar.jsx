import React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { FaHome, FaSignOutAlt } from "react-icons/fa"
import Logo from "../assets/logo.svg"

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  //cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("authToken")
    localStorage.removeItem("usuario")
    navigate("/")
  }

  // Función para verificar si una ruta está activa
  const isActive = (path) => {
    return location.pathname === path
  }

  const getItemStyles = (path) => {
    const active = isActive(path)
    return `
      flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start 
      ${
        active
          ? "bg-blue-500 text-white shadow-md"
          : "hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:text-blue-gray-900 active:bg-blue-gray-50"
      }
    `
  }

  return (
    <div className="relative flex h-screen w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
      <div className="p-4 mb-2">
        <img src={Logo} alt="Logo" className="w-100 h-100" />
      </div>

      <nav className="flex flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700 flex-grow">
        {/* Dashboard */}
        <Link to="/dashboard" className={getItemStyles("/dashboard")}>
          <div className="grid mr-4 place-items-center">
            <FaHome className="w-5 h-5" />
          </div>
          Dashboard
        </Link>

        <div className="flex-grow"></div>

        {/* Cerrar sesion */}
        <button
          onClick={handleLogout}
          className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-red-50 hover:bg-opacity-80 hover:text-red-700 focus:bg-red-50 focus:text-red-700 active:bg-red-50"
        >
          <div className="grid mr-4 place-items-center">
            <FaSignOutAlt className="w-5 h-5" />
          </div>
          Log Out
        </button>
      </nav>
    </div>
  )
}

export default Navbar
