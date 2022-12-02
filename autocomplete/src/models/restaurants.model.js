const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  address: {
    building: { type: String, required: true },
    coord: { type: Array, required: true },
    street: { type: String, required: true },
    zipcode: { type: String, required: true },
  },
  borough: { type: String, required: true },
  cuisine: { type: String, required: true },
  grade: [
    {
      date: { type: String, required: true },
      grade: { type: String, required: true },
      score: { type: Number, required: true },
    },
  ],
  name: { type: String, required: true },
  restaurant_id: { type: String, required: true },
});

const RestaurantModel = mongoose.model("Restaurant", restaurantSchema);
module.exports = RestaurantModel;
