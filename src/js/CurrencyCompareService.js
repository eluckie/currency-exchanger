export default class CurrencyCompareService {
  static async topConversions() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      if (!response.ok) {
        const errorMessage = `${response}`;
        throw new Error(errorMessage);
      }
      return response;
    } catch(error) {
      return error;
    }
  }
}