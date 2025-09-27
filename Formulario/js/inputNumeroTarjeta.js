function formato(input) {
  // Eliminar espacios y caracteres no numéricos
  let valor = input.value.replace(/\s+/g, "").replace(/[^\d]/g, "")

  // Formatear con espacios cada 4 dígitos
  let formato = valor.replace(/(\d{4})(?=\d)/g, "$1 ")

  // Actualizar el valor del input
  input.value = formato.trim()
}
