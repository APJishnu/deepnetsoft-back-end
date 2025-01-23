import express from "express";
import dotenv from "dotenv"; // Import dotenv
import configRoutes from "./routes/routes.js";
import connectDB from "./config/db.js";
import seedProducts from "./seedProducts.js";
import cors from "cors"; // Import cors

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware for parsing JSON requests
app.use(express.json());

// Enable CORS for all origins (you can restrict it to certain domains if needed)
app.use(
    cors({
      origin: process.env.FRONTEND_URI || 'http://localhost:3000',  // Allow only your frontend origin
      credentials: true,  // Allow credentials like cookies or authorization headers
      allowedHeaders: ['Content-Type', 'Authorization'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    })
  );
  

// Route configuration
configRoutes(app);

const PORT = process.env.PORT || 5000; // Use PORT from environment variables or default to 5000
app.listen(PORT, async () => {
  await connectDB(); // Connect to MongoDB
  await seedProducts();
  console.log(`Server is running on port ${PORT}`);
});
