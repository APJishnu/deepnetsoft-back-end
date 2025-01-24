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

const allowedOrigins = [
  "https://deepnetsoft-front-end.vercel.app",
  "https://deepnetsoft-front-end.vercel.app/",
  "http://deepnetsoft-front-end.vercel.app/",
  "http://deepnetsoft-front-end.vercel.app",
  process.env.FRONTEND_URI.replace(/\/$/, ""),
];

// Enable CORS for all origins (you can restrict it to certain domains if needed)
app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    }, // Allow only your frontend origin
    credentials: true, // Allow credentials like cookies or authorization headers
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD"],
  })
);

// Route configuration
configRoutes(app);

const PORT = process.env.PORT || 5000; // Use PORT from environment variables or default to 5000
app.listen(PORT, "0.0.0.0", async () => {
  await connectDB(); // Connect to MongoDB
  await seedProducts();
  console.log(`Server is running on port ${PORT}`);
});
