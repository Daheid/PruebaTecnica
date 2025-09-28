import { useState, useEffect } from "react"

// Función para transformar los datos de la API al formato que necesita tu tabla
const transformarTransaccion = (transaccion) => {
  return {
    id: transaccion.id,
    divisa: transaccion.divisa?.simbolo || "N/A",
    monto: parseFloat(transaccion.monto),
    descripcion: transaccion.descripcion,
    nombre: `${transaccion.nombre} ${transaccion.apellido}`,
    tipoDeDocumento: transaccion.documento?.simbolo || "N/A",
    fecha: new Date(transaccion.created_at).toLocaleDateString("es-ES"),
    // Datos adicionales por si los necesitas
    datosCompletos: transaccion,
  }
}

export const useTransacciones = () => {
  const [transacciones, setTransacciones] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTransacciones = async () => {
      try {
        setLoading(true)
        setError(null)

        const API_URL =
          import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api/v1"

        const response = await fetch(`${API_URL}/transacciones`)

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }

        const data = await response.json()

        if (data.operacion && Array.isArray(data.transacciones)) {
          const transaccionesTransformadas = data.transacciones.map(
            transformarTransaccion
          )
          setTransacciones(transaccionesTransformadas)
        } else {
          throw new Error("Formato de respuesta inválido")
        }
      } catch (err) {
        setError(err.message)
        console.error("Error fetching transacciones:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchTransacciones()
  }, [])

  return { transacciones, loading, error }
}
