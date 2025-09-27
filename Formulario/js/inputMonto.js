function Decimal(input) {
  if (input.value === "") {
    input.value = "0.00"
    return
  }

  let value = parseFloat(input.value)
  if (isNaN(value)) {
    input.value = "0.00"
    return
  }

  input.value = value.toFixed(2)
}
