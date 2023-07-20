const mongoose = require("mongoose");
require("dotenv").config();

(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://chat-app:VkaU5E9eA6xhzQHZ@cluster0.n0blyfw.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
})();
