const celsius = document.getElementById("Celsius");
const fahrenheit = document.getElementById("Fahrenheit");
const kelvin = document.getElementById("Kelvin");

function computeTemp() {
  const currentValue = event.target.value;
  switch (event.target.name) {
    case "Celsius":
      kelvin.value = currentValue + 273.15;
      fahrenheit.value = (currentValue * 9) / 5 + 32;
      break;
    case "Fahrenheit":
      celsius.value = ((currentValue - 32) * 5) / 9;
      kelvin.value = ((currentValue - 32) * 5) / 9 + 273.15;
      break;
    case "Kelvin":
      celsius.value = currentValue - 273.15;
      fahrenheit.value = ((currentValue - 273.15) * 9) / 5 + 32;
      break;
    default:
      break;
  }
}
