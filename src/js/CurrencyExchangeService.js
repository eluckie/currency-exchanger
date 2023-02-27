export default class CurrencyExchangeService {
  static getConversion(amount, fromUnit, toUnit) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${fromUnit}/${toUnit}/${amount}`)
      .then(function(response) {
        if (!response.conversion_rates) {
          const errorMessage = `${response.status}`;
          return new Error(errorMessage);
        } else {
          return response.json();
        }
      });
  }
}