import "./css/styles.css";
import CurrencyExchangeService from "./js/CurrencyExchangeService";
import CurrencyCompareService from "./js/CurrencyCompareService";

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

async function topConversions() {
  const response = await CurrencyCompareService.topConversions();
  if (response) {
    displayTopConversions(response);
  } else {
    displayComparisonError(response);
  }
}


function displayTopConversions(response) {
  let div = document.getElementById("conversion-display");
  div.innerText = null;
  div.innerText = `${response.conversion_rates.USD} USD (United States Dollar) is equal to\n
  ${response.conversion_rates.EUR} EUR (Euro) is equal to\n
  ${response.conversion_rates.JPY} JPY (Japanese Yen) is equal to\n
  ${response.conversion_rates.GBP} GBP (Pound Sterling) is equal to\n
  ${response.conversion_rates.AUD} AUD (Australian Dollar) is equal to\n
  ${response.conversion_rates.CAD} CAD (Canadian Dollar)`;
}

function displayComparisonError(response) {
  document.getElementById("conversion-display").innerText = `There was an error comparing your currency
  ${response}`;
}

function processTopConversions() {
  hideAllCurrencies();
  topConversions();
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
  hideAllCurrencies();
  const amount = document.getElementById("conversion-amount").value;
  const fromUnit = document.getElementById("convert-from-unit").value;
  const toUnit = document.getElementById("convert-to-unit").value;

  if (fromUnit === "KPW" || fromUnit === "XDR" || toUnit === "KPW" || toUnit === "XDR") {
    document.getElementById("currency-error").removeAttribute("class");
  } else if (!amount) {
    document.getElementById("number-error").removeAttribute("class");
  } else {
    document.getElementById("currency-error").setAttribute("class", "hidden");
    document.getElementById("number-error").setAttribute("class", "hidden");
    getConversion(amount, fromUnit, toUnit);
    document.getElementById("conversion-amount").value = null;
  }
} 

function displayAllCurrencies() {
  document.getElementById("currency-list").removeAttribute("class");
  document.getElementById("hide-currencies-button").removeAttribute("class");
}

function hideAllCurrencies() {
  document.getElementById("currency-list").setAttribute("class", "hidden");
  document.getElementById("hide-currencies-button").setAttribute("class", "hidden");
}

function resetScreen() {
  hideAllCurrencies();
  document.getElementById("currency-converter-form").reset();
  document.getElementById("conversion-display").innerText = null;
  document.getElementById("number-error").setAttribute("class", "hidden");
  document.getElementById("currency-error").setAttribute("class", "hidden");
  document.getElementById("hide-currencies-button").setAttribute("class", "hidden");
}

document.getElementById("currency-converter-form").addEventListener("submit", formSubmission);
document.getElementById("supported-currencies").addEventListener("click", displayAllCurrencies);
document.getElementById("hide-currencies-button").addEventListener("click", hideAllCurrencies);
document.getElementById("reset-button").addEventListener("click", resetScreen);
document.getElementById("top-conversions-button").addEventListener("click", processTopConversions);