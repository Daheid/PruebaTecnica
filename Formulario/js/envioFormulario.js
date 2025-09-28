async function enviarFormulario(event) {
  event.preventDefault()

  const datos = {
    divisa_id: document.getElementById("divisa").value,
    monto: parseFloat(document.getElementById("monto").value),
    descripcion: document.getElementById("descripcion").value.trim(),
    documento_id: document.getElementById("tipoDocumento").value,
    nro_documento: document.getElementById("documento").value.trim(),
    nombre: document.getElementById("Nombre").value.trim(),
    apellido: document.getElementById("apellido").value.trim(),
    nro_tarjeta: document.getElementById("tarjeta").value.replace(/\s/g, ""),
    fechaVencimiento: document.getElementById("fechaVen").value.trim(),
  }

  const fechaCompleta = datos.fechaVencimiento
  if (fechaCompleta.includes("/")) {
    const [mes, ano] = fechaCompleta.split("/")
    datos.mes_vencimiento = mes.padStart(2, "0")
    datos.ano_vencimiento = ano.padStart(2, "0")
    delete datos.fechaVencimiento
  }

  if (isNaN(datos.monto) || datos.monto <= 0) {
    Swal.fire({
      icon: "error",
      title: "Monto inválido",
      text: "Por favor, ingrese un monto válido mayor a cero",
      confirmButtonColor: "#3085d6",
    })
    return
  }

  console.log(datos)

  try {
    const boton = event.target.querySelector('button[type="submit"]')
    const textoOriginal = boton.textContent
    boton.textContent = "Procesando..."
    boton.disabled = true

    // Mostrar alerta de carga
    Swal.fire({
      title: "Procesando pago",
      text: "Por favor espere...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      },
    })

    // Enviar datos al endpoint
    const respuesta = await fetch(
      "http://127.0.0.1:8000/api/v1/transacciones",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      }
    )

    // Cerrar alerta de carga
    Swal.close()

    if (respuesta.status === 422) {
      const errorData = await respuesta.json()
      console.error("Errores de validación:", errorData)

      let mensajeError = "Errores de validación:\n"
      if (errorData.errors) {
        mensajeError += Object.values(errorData.errors).flat().join("\n")
      }

      Swal.fire({
        icon: "error",
        title: "Error de validación",
        html: mensajeError.replace(/\n/g, "<br>"),
        confirmButtonColor: "#d33",
      })
      return
    }

    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`)
    }

    const resultado = await respuesta.json()

    // exito
    Swal.fire({
      icon: "success",
      title: "¡Pago exitoso!",
      text: "El pago ha sido procesado correctamente",
      confirmButtonColor: "#28a745",
      timer: 3000,
      timerProgressBar: true,
    })

    console.log("Respuesta del servidor:", resultado)

    // Resetear formulario
    event.target.reset()
  } catch (error) {
    console.error("Error al procesar el pago:", error)
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Error al procesar el pago. Por favor, intente nuevamente.",
      confirmButtonColor: "#d33",
    })
  } finally {
    const boton = event.target.querySelector('button[type="submit"]')
    boton.textContent = "Pagar YA!"
    boton.disabled = false
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector("form")
  formulario.addEventListener("submit", enviarFormulario)
})
