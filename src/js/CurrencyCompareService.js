export default class CurrencyCompareService {
  static async topConversions() {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
    const jsonResponse = await response.json();
    if (!response.ok) {
      const errorMessage = `${jsonResponse}`;
      return new Error(errorMessage);
    }
    return jsonResponse;
  }
}