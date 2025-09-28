async function cargarDocumentos() {
  const select = document.getElementById("tipoDocumento")

  try {
    const response = await fetch(
      "https://api.pruebatecnica.nelsoncarrero.dev/api/v1/documentos"
    )

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    const datos = await response.json()

    select.innerHTML = ""

    // Llenar opciones
    datos.documentos.forEach((documento) => {
      const option = document.createElement("option")
      option.value = documento.id
      option.textContent = documento.simbolo
      select.appendChild(option)
    })
  } catch (error) {
    console.error("Error al cargar los documentos:", error)
    select.innerHTML = '<option value="">Error al cargar</option>'
  }
}

cargarDocumentos()
