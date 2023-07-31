function convertTemperature() {
const inputTemperature = document.getElementById("inputTemperature").value;
const unitFrom = document.getElementById("unitFrom").value;
const unitTo = document.getElementById("unitTo").value;
const result1 = document.getElementById("result1");
document.getElementById("result1").readOnly =true;

let result = 0;

    if (unitFrom === "Celsius" && unitTo === "Fahrenheit") {
        result = ((parseFloat(inputTemperature) * 9) / 5) + 32;
    } else if (unitFrom === "Fahrenheit" && unitTo === "Celsius") {
        result = ((parseFloat(inputTemperature) - 32) * 5) / 9;
    } else {
        result = inputTemperature.value;
    }

    

    // document.getElementById("result").textContent = `Converted Temperature: ${result.toFixed(2)} ${unitTo}`;
    // let ans =  ${result.toFixed(2)} ${unitTo};
    result1.value = result;
}