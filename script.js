const input = document.getElementById("input")
const button = document.getElementById("submit")
const categorySelect = document.getElementById("categorySelect")
const subMenu = document.querySelectorAll(".sub-menu")

// Listen for whenever the user changes the main dropdown
categorySelect.addEventListener("change", function() {
    
    // First, hide every single sub-menu
    subMenu.forEach(function(menu) {
        menu.style.display = "none";
    });

    // Get the value of the category the user just clicked (e.g., "tempMenu")
    let selectedMenuId = categorySelect.value;

    // If they picked a valid category (not the default empty option), show the sub-menu
    if (selectedMenuId !== "") {
        document.getElementById(selectedMenuId).style.display = "inline-block";
    }
});
const toCelsius = document.getElementById("toCelsius")
const toFahrenheit = document.getElementById("toFahrenheit")
const toMiles = document.getElementById("toMiles")
const toKilometers = document.getElementById("toKilometers")
const toFeet = document.getElementById("toFeet")
const toMeters = document.getElementById("toMeters")
const toInches = document.getElementById("toInches")
const toCentimeters = document.getElementById("toCentimeters")
const toPounds = document.getElementById("toPounds")
const toKilograms = document.getElementById("toKilograms")
const toOunces = document.getElementById("toOunces")
const toGrams = document.getElementById("toGrams")
const toGigabytes1 = document.getElementById("toGigabytes1")
const toMegabytes = document.getElementById("toMegabytes")
const toTerabytes = document.getElementById("toTerabytes")
const toGigabytes2 = document.getElementById("toGigabytes2")
const toSquareFeet = document.getElementById("toSquareFeet")
const toSquareMeters1 = document.getElementById("toSquareMeters1")
const toAcres1 = document.getElementById("toAcres1")
const toHectares = document.getElementById("toHectares")
const toMilesPerHour = document.getElementById("toMilesPerHour")
const toKilometersPerHour1 = document.getElementById("toKilometersPerHour1")
const toKilometersPerHour2 = document.getElementById("toKilometersPerHour2")
const toUsGallons = document.getElementById("toUsGallons")
const toLiters = document.getElementById("toLiters")
const toUsFluidOunces = document.getElementById("toUsFluidOunces")
const toMilliliters = document.getElementById("toMilliliters")
const toHorsepower = document.getElementById("toHorsepower")
const toKilowatts1 = document.getElementById("toKilowatts1")
const toKilowatts2 = document.getElementById("toKilowatts2")
const toMinutes = document.getElementById("toMinutes")
const toHours = document.getElementById("toHours")
const toDays = document.getElementById("toDays")
const toSquareMeters2 = document.getElementById("toSquareMeters2")
const toPlots = document.getElementById("toPlots")
const toAcres2 = document.getElementById("toAcres2")
const result = document.getElementById("result")
let temp = input

button.onclick = function convert(){
    let activeCategory = categorySelect.value;
    let activeDropdown = document.getElementById(activeCategory); // grabs the visible dropdown
    let chosenConversion = activeDropdown.value; // e.g., "toFahrenheit"
    let temp = Number(input.value);
    if (chosenConversion === "toFahrenheit") {
     // do Celsius to Fahrenheit math
        let convert = temp * 9 / 5 + 32
        result.textContent = convert.toFixed(1) + " °F"; // .toFixed(1) rounds to 1 decimal
    }
    else if(chosenConversion === "toCelsius"){
        let convert = (temp - 32) * (5/9)
        result.textContent = convert.toFixed(1) + " °C";
    }
    else if(chosenConversion === "toMiles"){
        let convert = temp * 0.621371
        result.textContent = convert.toFixed(2) + " miles";
    }
    else if(chosenConversion === "toKilometers"){
        let convert = temp / 0.621371
        result.textContent = convert.toFixed(2) + " km";
    }
    else if(chosenConversion === "toFeet"){
        let convert = temp * 3.28084
        result.textContent = convert.toFixed(2) + " ft";
    }
    else if(chosenConversion === "toMeters"){
        let convert = temp / 3.28084
        result.textContent = convert.toFixed(2) + " m";
    }
    else if(chosenConversion === "toInches"){
        let convert = temp / 2.54
        result.textContent = convert.toFixed(2) + " in";
    }
    else if(chosenConversion === "toCentimeters"){
        let convert = temp * 2.54
        result.textContent = convert.toFixed(2) + " cm";
    }
    else if(chosenConversion === "toPounds"){
        let convert = temp * 2.20462
        result.textContent = convert.toFixed(2) + " lbs";
    }
    else if(chosenConversion === "toKilograms"){
        let convert = temp / 2.20462
        result.textContent = convert.toFixed(2) + " kg";
    }
    else if(chosenConversion === "toOunces"){
        let convert = temp / 28.3495
        result.textContent = convert.toFixed(2) + " oz";
    }
    else if(chosenConversion === "toGrams"){
        let convert = temp * 28.3495
        result.textContent = convert.toFixed(2) + " g";
    }
    else if(chosenConversion === "toGigabytes1"){
        let convert = temp / 1024
        result.textContent = convert.toFixed(2) + " GB";
    }
    else if(chosenConversion === "toMegabytes"){
        let convert = temp * 1024
        result.textContent = convert.toFixed(2) + " MB";
    }
    else if(chosenConversion === "toTerabytes"){
        let convert = temp / 1024
        result.textContent = convert.toFixed(2) + " TB";
    }
    else if(chosenConversion === "toGigabytes2"){
        let convert = temp * 1024
        result.textContent = convert.toFixed(2) + " GB";
    }
    else if(chosenConversion === "toSquareFeet"){
        let convert = temp * 10.7639
        result.textContent = convert.toFixed(2) + " sq ft";
    }
    else if(chosenConversion === "toSquareMeters1"){
        let convert = temp / 10.7639
        result.textContent = convert.toFixed(2) + " sqm";
    }
    else if(chosenConversion === "toAcres1"){
        let convert = temp * 2.47105
        result.textContent = convert.toFixed(2) + " Acres";
    }
    else if(chosenConversion === "toHectares"){
        let convert = temp / 2.47105
        result.textContent = convert.toFixed(2) + " Hectares";
    }
    else if(chosenConversion === "toMilesPerHour"){
        let convert = temp * 0.621371
        result.textContent = convert.toFixed(2) + " mph";
    }
    else if(chosenConversion === "toKilometersPerHour1"){
        let convert = temp / 0.621371
        result.textContent = convert.toFixed(2) + " km/h";
    }
    else if(chosenConversion === "toKilometersPerHour2"){
        let convert = temp * 3.6
        result.textContent = convert.toFixed(2) + " km/h";
    }
    else if(chosenConversion === "toUsGallons"){
        let convert = temp * 0.264172
        result.textContent = convert.toFixed(2) + " Gallons";
    }
    else if(chosenConversion === "toLiters"){
        let convert = temp / 0.264172
        result.textContent = convert.toFixed(2) + " liters";
    }
    else if(chosenConversion === "toUsFluidOunces"){
        let convert = temp / 29.5735
        result.textContent = convert.toFixed(2) + " fl oz";
    }
    else if(chosenConversion === "toMilliliters"){
        let convert = temp * 29.5735
        result.textContent = convert.toFixed(2) + " ml";
    }
    else if(chosenConversion === "toHorsepower"){
        let convert = temp * 1.34102
        result.textContent = convert.toFixed(2) + " hp";
    }
    else if(chosenConversion === "toKilowatts1"){
        let convert = temp / 1.34102
        result.textContent = convert.toFixed(2) + " kW";
    }
    else if(chosenConversion === "toKilowatts2"){
        let convert = temp * 0.8
        result.textContent = convert.toFixed(2) + " kW";
    }
    else if(chosenConversion === "toMinutes"){
        let convert = temp * 60
        result.textContent = convert.toFixed(2) + " minutes";
    }
    else if(chosenConversion === "toHours"){
        let convert = temp * 24
        result.textContent = convert.toFixed(2) + " hours";
    }
    else if(chosenConversion === "toDays"){
        let convert = temp * 7
        result.textContent = convert.toFixed(2) + " days";
    }
    else if(chosenConversion === "toSquareMeters2"){
        let convert = temp * 668.9
        result.textContent = convert.toFixed(2) + " sqm";
    }
    else if(chosenConversion === "toPlots"){
        let convert = temp / 668.9
        result.textContent = convert.toFixed(2) + " plots";
    }
    else if(chosenConversion === "toAcres2"){
        let convert = temp / 6
        result.textContent = convert.toFixed(2) + " acres";
    }
    else{
        result.textContent = 'Please select a unit'
    }
}

// if user prefers to use radio buttons
/*
button.onclick = function convert(){
    let temp = Number(input.value);

    if(input.value === "" || isNaN(temp)){
        result.textContent = 'Please enter a number'
    }
    else if(toFahrenheit.checked){
        let convert = temp * 9 / 5 + 32
        result.textContent = convert.toFixed(1) + " °F"; // .toFixed(1) rounds to 1 decimal
    }
    else if(toCelsius.checked){
        let convert = (temp - 32) * (5/9)
        result.textContent = convert.toFixed(1) + " °C";
    }
    else if(toMiles.checked){
        let convert = temp * 0.621371
        result.textContent = convert.toFixed(2) + " miles";
    }
    else if(toKilometers.checked){
        let convert = temp / 0.621371
        result.textContent = convert.toFixed(2) + " km";
    }
    else if(toFeet.checked){
        let convert = temp * 3.28084
        result.textContent = convert.toFixed(2) + " ft";
    }
    else if(toMeters.checked){
        let convert = temp / 3.28084
        result.textContent = convert.toFixed(2) + " m";
    }
    else if(toInches.checked){
        let convert = temp / 2.54
        result.textContent = convert.toFixed(2) + " in";
    }
    else if(toCentimeters.checked){
        let convert = temp * 2.54
        result.textContent = convert.toFixed(2) + " cm";
    }
    else if(toPounds.checked){
        let convert = temp * 2.20462
        result.textContent = convert.toFixed(2) + " lbs";
    }
    else if(toKilograms.checked){
        let convert = temp / 2.20462
        result.textContent = convert.toFixed(2) + " kg";
    }
    else if(toOunces.checked){
        let convert = temp / 28.3495
        result.textContent = convert.toFixed(2) + " oz";
    }
    else if(toGrams.checked){
        let convert = temp * 28.3495
        result.textContent = convert.toFixed(2) + " g";
    }
    else if(toGigabytes1.checked){
        let convert = temp / 1024
        result.textContent = convert.toFixed(2) + " GB";
    }
    else if(toMegabytes.checked){
        let convert = temp * 1024
        result.textContent = convert.toFixed(2) + " MB";
    }
    else if(toTerabytes.checked){
        let convert = temp / 1024
        result.textContent = convert.toFixed(2) + " TB";
    }
    else if(toGigabytes2.checked){
        let convert = temp * 1024
        result.textContent = convert.toFixed(2) + " GB";
    }
    else if(toSquareFeet.checked){
        let convert = temp * 10.7639
        result.textContent = convert.toFixed(2) + " sq ft";
    }
    else if(toSquareMeters1.checked){
        let convert = temp / 10.7639
        result.textContent = convert.toFixed(2) + " sqm";
    }
    else if(toAcres1.checked){
        let convert = temp * 2.47105
        result.textContent = convert.toFixed(2) + " Acres";
    }
    else if(toHectares.checked){
        let convert = temp / 2.47105
        result.textContent = convert.toFixed(2) + " Hectares";
    }
    else if(toMilesPerHour.checked){
        let convert = temp * 0.621371
        result.textContent = convert.toFixed(2) + " mph";
    }
    else if(toKilometersPerHour1.checked){
        let convert = temp / 0.621371
        result.textContent = convert.toFixed(2) + " km/h";
    }
    else if(toKilometersPerHour2.checked){
        let convert = temp * 3.6
        result.textContent = convert.toFixed(2) + " km/h";
    }
    else if(toUsGallons.checked){
        let convert = temp * 0.264172
        result.textContent = convert.toFixed(2) + " Gallons";
    }
    else if(toLiters.checked){
        let convert = temp / 0.264172
        result.textContent = convert.toFixed(2) + " liters";
    }
    else if(toUsFluidOunces.checked){
        let convert = temp / 29.5735
        result.textContent = convert.toFixed(2) + " fl oz";
    }
    else if(toMilliliters.checked){
        let convert = temp * 29.5735
        result.textContent = convert.toFixed(2) + " ml";
    }
    else if(toHorsepower.checked){
        let convert = temp * 1.34102
        result.textContent = convert.toFixed(2) + " hp";
    }
    else if(toKilowatts1.checked){
        let convert = temp / 1.34102
        result.textContent = convert.toFixed(2) + " kW";
    }
    else if(toKilowatts2.checked){
        let convert = temp * 0.8
        result.textContent = convert.toFixed(2) + " kW";
    }
    else if(toMinutes.checked){
        let convert = temp * 60
        result.textContent = convert.toFixed(2) + " minutes";
    }
    else if(toHours.checked){
        let convert = temp * 24
        result.textContent = convert.toFixed(2) + " hours";
    }
    else if(toDays.checked){
        let convert = temp * 7
        result.textContent = convert.toFixed(2) + " days";
    }
    else if(toSquareMeters2.checked){
        let convert = temp * 668.9
        result.textContent = convert.toFixed(2) + " sqm";
    }
    else if(toPlots.checked){
        let convert = temp / 668.9
        result.textContent = convert.toFixed(2) + " plots";
    }
    else if(toAcres2.checked){
        let convert = temp / 6
        result.textContent = convert.toFixed(2) + " acres";
    }
    else{
        result.textContent = 'Please select a unit'
    }
}*/