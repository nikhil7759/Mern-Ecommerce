import mongoose from "mongoose";
const URL = "mongodb+srv://useyourown:6TmX5JHzcEMs@cluster0.mjnke.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Function to connect to the database
export const dataBaseConnection = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongoose is connected");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Exit the process if the database connection fails
  }
};

// Define schema
const userSchema = new mongoose.Schema({
  title: String,
  image: String,
  price: Number,
  gender: String,
  color: String,
  categories: String
});

// Create model
const User = mongoose.model("User", userSchema);

export default User;
