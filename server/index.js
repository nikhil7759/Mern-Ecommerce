import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { dataBaseConnection } from "./db.js";
import User from "./db.js";

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// Connect to the database
dataBaseConnection();

// Root route


// Route to get all users with filters
app.get("/", async (req, res) => {
  try {
    const { gender, color, categories } = req.query; // Extract query parameters
    let query = {};
    
    if (gender) {
      query.gender = gender;
    }
    if (color) {
      query.color = color;
    }
    if (categories){
      query.categories = categories;
    }
    
    const users = await User.find(query);
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Server error");
  }
});

// Route to add a new user
app.post("/api/users", async (req, res) => {
  const { title, image, price, gender, color, categories } = req.body;
  try {
    const newUser = new User({ title, image, price, gender, color, categories });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(400).send("Bad request");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
