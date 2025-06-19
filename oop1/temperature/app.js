function Temperature(celsius) {
    this.celsius = (celsius >= -273) ? celsius : -273;
}

Temperature.prototype.toFahrenheit = function() {
    return (this.celsius * 9/5) + 32;
};

Temperature.prototype.toKelvin = function() {
    return this.celsius + 273.15;
};

const temp = new Temperature(25);

document.write("Nhiệt độ (°C): " + temp.celsius + "°C<br>");
document.write("Fahrenheit (°F): " + temp.toFahrenheit().toFixed(2) + "°F<br>");
document.write("Kelvin (K): " + temp.toKelvin().toFixed(2) + "K");
