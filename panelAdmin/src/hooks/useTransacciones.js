import { useState, useEffect, useCallback } from "react"

const transformarTransaccion = (transaccion) => {
  return {
    id: transaccion.id,
    divisa: transaccion.divisa?.simbolo || "N/A",
    monto: parseFloat(transaccion.monto),
    descripcion: transaccion.descripcion,
    nombre: `${transaccion.nombre} ${transaccion.apellido}`,
    tipoDeDocumento: `${transaccion.documento?.simbolo || "N/A"}. - ${
      transaccion.nro_documento || "N/A"
    }`,
    nroDocumento: transaccion.nro_documento,
    fecha: new Date(transaccion.created_at).toLocaleDateString("es-ES"),
    datosCompletos: transaccion,
  }
}

export const useTransacciones = () => {
  const [transacciones, setTransacciones] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchTransacciones = useCallback(async () => {
    try {
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
    }
  }, [])

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      await fetchTransacciones()
      setLoading(false)
    }

    loadData()

    // Polling cada 5 segundos
    const interval = setInterval(fetchTransacciones, 5000)

    return () => clearInterval(interval)
  }, [fetchTransacciones])

  return {
    transacciones,
    loading,
    error,
    refetch: fetchTransacciones,
  }
}
