import { dataBaseConnection } from "./db.js";
import User from "./db.js"; // Import User model

// Connect to the database
dataBaseConnection().then(async () => {
  try {
    // Create a new user
    const newUser = new User({
      title: "Black Tea",
      image: "john.doe@example.com",
      price: 999,
    });

    // Save the user to the database
    await newUser.save();
    console.log("User saved successfully!");

    // Optionally, you can fetch and display all users
    const users = await User.find();
    console.log("Users:", users);
  } catch (error) {
    console.error("Error:", error);
  }
});
