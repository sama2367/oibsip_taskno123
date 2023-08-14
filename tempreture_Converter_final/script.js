const celsiusElem = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusElem.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if(tempType.value === "fahrenheit")
  {
    convertToCelsius();
  }
  else
  {
    convertToFahrenheit();
  }
});

function convertToCelsius() {
  let inputValue = degree.value;
if (tempType.value === "fahrenheit") {
    const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
    celsiusElem.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;C`;
  }
}
function convertToFahrenheit() {
  if (tempType.value === "celci") {
    let inputValue = degree.value;
    const CelsiusTofahrenheit = (inputValue*(9/5)) + 32;
    celsiusElem.innerHTML = `${CelsiusTofahrenheit.toFixed(3)} &deg;F`;
  }
}