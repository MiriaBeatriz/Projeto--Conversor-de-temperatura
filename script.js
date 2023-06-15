function convertToKelvin() {
    var celsiusInput = document.getElementById("celsius");
    var celsius = parseFloat(celsiusInput.value);
    var kelvin = celsius + 273.15;
    
    var result = document.getElementById("result");
    result.textContent = "Kelvin: " + kelvin.toFixed(2);
  }
  
  function convertToFahrenheit() {
    var celsiusInput = document.getElementById("celsius");
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9/5) + 32;
    
    var result = document.getElementById("result");
    result.textContent = "Fahrenheit: " + fahrenheit.toFixed(2);
  }