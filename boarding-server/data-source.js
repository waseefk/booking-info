const { RESTDataSource } = require("apollo-datasource-rest");

class BookingAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000/"; // The URL of your mock server
  }

  async getBooking(code) {
    if (!code) {
      throw new Error("Booking code is required");
    }
    return this.get(`bookings/${code}`);
  }
}
module.exports = BookingAPI;
