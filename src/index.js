import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchangeService from "./js/CurrencyExchangeService";

function getConversion(amount, fromUnit, toUnit) {
  CurrencyExchangeService.getConversion(amount, fromUnit, toUnit)
    .then(function(response) {
      if(response.result) {
        displayConversion(response);
      } else {
        displayError(response);
      }
    });
}

function displayConversion(response) {
  return response;
}

function displayError(response) {
  document.getElementById("conversion-display").innerText = `There was an error converting your currency: ${response.result} - ${response.errortype}`;
}

function formSubmission(event) {
  event.preventDefault();
  const amount = document.getElementById("conversion-amount").value;
  const fromUnit = document.getElementById("convert-from-unit").value;
  const toUnit = document.getElementById("convert-to-unit").value;
  console.log("amount: " + amount);
  console.log("fromUnit: " + fromUnit);
  console.log("toUnit: " + toUnit);
  getConversion(amount, fromUnit, toUnit);
} 

document.getElementById("currency-converter-form").addEventListener("submit", formSubmission);