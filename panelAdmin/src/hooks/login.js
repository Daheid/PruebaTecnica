// hooks/useLogin.js
import { useState } from "react"

export const Login = () => {
  const [Datos, setFormData] = useState({
    nombre: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...Datos,
      [e.target.name]: e.target.value,
    })
    if (error) setError("")
  }

  const handleSubmit = async (e, onSuccess) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const API_URL =
        import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api/v1"

      const response = await fetch(`${API_URL}/auth/usuarios`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Datos),
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.setItem("authToken", data.token)
        localStorage.setItem("usuario", JSON.stringify(data.user))

        // Llamamos al callback de éxito
        if (onSuccess) onSuccess()
      } else {
        setError(data.error.nombre || "Error en el login")
      }
    } catch (err) {
      setError("Error de conexión. Intenta nuevamente.")
      console.error("Error:", err)
    } finally {
      setLoading(false)
    }
  }

  return {
    Datos,
    loading,
    error,
    handleChange,
    handleSubmit,
  }
}
