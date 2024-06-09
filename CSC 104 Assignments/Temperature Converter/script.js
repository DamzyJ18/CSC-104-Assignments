function convertToFahrenheit() {
    var celsius = parseFloat(prompt("Enter the temperature in degrees Celsius"));
    var fahrenheit = (celsius * 9/5) + 32;
    alert(celsius + " degrees Celsius is equal to " + fahrenheit.toFixed(2));
}

convertToFahrenheit();