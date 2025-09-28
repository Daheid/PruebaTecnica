async function cargarDivisas() {
  const select = document.getElementById("divisa")

  try {
    const response = await fetch("http://127.0.0.1:8000/api/v1/divisas")

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    const datos = await response.json()

    select.innerHTML = ""

    // Llenar opciones
    datos.divisas.forEach((divisa) => {
      const option = document.createElement("option")
      option.value = divisa.id
      option.textContent = divisa.simbolo
      select.appendChild(option)
    })
  } catch (error) {
    console.error("Error al cargar divisas:", error)
    select.innerHTML = '<option value="">Error al cargar</option>'
  }
}

cargarDivisas()
