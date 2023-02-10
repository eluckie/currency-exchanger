export default class CurrencyExchangeService {
  static getConversion(amount, fromUnit, toUnit) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${fromUnit}/${toUnit}/${amount}`)
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `${response.result} ${response.error_type}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch(function(errorMessage) {
        return errorMessage;
      });
  }
}