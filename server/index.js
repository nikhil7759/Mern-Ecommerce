import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { dataBaseConnection } from "./db.js";
import User from "./db.js";
import nodemailer from "nodemailer";

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// Connect to the database
dataBaseConnection();

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: "gmail", // You can use other services like Yahoo, Outlook, etc.
  auth: {
    user: "batnik8434@gmail.com", // Your email
    pass: "nkvjqilyzwxyuupc", // Your password or app-specific password
  },
});

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

// Route to add a new user and send an email
app.post("/api/users", async (req, res) => {
  const { title, image, price, gender, color, categories, email } = req.body;

  try {
    const newUser = new User({ title, image, price, gender, color, categories });
    await newUser.save();

    // Send email after adding a new user
    const mailOptions = {
      from: "batnik8434@gmail.com", // Your email
      to: email, // Send email to the user's email
      subject: "Welcome to Our Service!",
      text: `Hello, thank you for subscribing to our service. Your product "${title}" has been successfully added!`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

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
