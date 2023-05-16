const mockData = require("./mock.json");

const resolvers = {
  Query: {
    bookingData: () => mockData,
    // booking: (parent, { bookingCode }, context, info) => {
    //   return mockData.find((booking) => booking.bookingCode === bookingCode);
    // },
    booking: (parent, args, context, info) => {
      const { bookingCode } = args;
      if (mockData.bookingCode === bookingCode) {
        return mockData;
      } else {
        throw new Error(`Booking with code ${bookingCode} not found.`);
      }
    },
  },
};

module.exports = resolvers;
