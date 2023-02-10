import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchangeService from "./js/CurrencyExchangeService";

function getConversion(amount, fromUnit, toUnit) {
  CurrencyExchangeService.getConversion(amount, fromUnit, toUnit)
    .then(function(response) {
      if(response.result) {
        displayConversion(response, amount, fromUnit, toUnit);
      } else {
        displayError(response);
      }
    });
}

function displayConversion(response, amount, fromUnit, toUnit) {
  let div = document.getElementById("conversion-display");
  div.innerText = null;
  div.innerText = `${amount} ${fromUnit} = ${response.conversion_result} ${toUnit}
  The conversion rate is 1 ${fromUnit} : ${response.conversion_rate} ${toUnit}`;
}

function displayError(response) {
  document.getElementById("conversion-display").innerText = `There was an error converting your currency
  ${response}`;
}

function formSubmission(event) {
  event.preventDefault();
  const amount = document.getElementById("conversion-amount").value;
  const fromUnit = document.getElementById("convert-from-unit").value;
  const toUnit = document.getElementById("convert-to-unit").value;
  getConversion(amount, fromUnit, toUnit);
  document.getElementById("currency-converter-form").reset();
} 

document.getElementById("currency-converter-form").addEventListener("submit", formSubmission);