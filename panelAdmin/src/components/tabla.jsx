import React, { useState } from "react"
import Paginacion from "./paginacion"
import { useTransacciones } from "../hooks/usetransacciones"

const ITEMS_PER_PAGE = 8

export default function Tabla() {
  const [currentPage, setCurrentPage] = useState(1)
  const { transacciones, loading, error } = useTransacciones()

  const totalPages = Math.ceil(transacciones.length / ITEMS_PER_PAGE)

  // Elementos a mostrar
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentRows = transacciones.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  // Estados de carga y error
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <span className="ml-2 text-gray-600">Cargando transacciones...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-red-600 text-center">
          <p className="text-lg font-semibold">Error al cargar los datos</p>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    )
  }

  if (transacciones.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-500 text-center">
          <p className="text-lg">No hay transacciones disponibles</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Tabla */}
      <div className="overflow-hidden shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-900">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Divisa
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-white uppercase tracking-wider">
                Monto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Descripción
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Documento
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Fecha
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentRows.map((row, index) => (
              <tr
                key={row.id}
                className={
                  index % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-gray-100"
                }
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {row.divisa}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                  {row.monto.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.descripcion}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.nombre}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.tipoDeDocumento}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.fecha}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <Paginacion
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={transacciones.length}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={handlePageChange}
      />
    </div>
  )
}
