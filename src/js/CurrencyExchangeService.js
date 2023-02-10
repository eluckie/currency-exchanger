export default class CurrencyExchangeService {
  static getConversion(amount, fromUnit, toUnit) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${fromUnit}/${toUnit}/${amount}`)
      .then(function(response) {
        if (!response.ok) {
          console.log(response);
          const errorMessage = `${response.status}`;
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