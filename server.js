import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import { fileURLToPath } from "url"; // Import this
import { dirname, join, resolve } from "path"; // Import these

// Get the current module's file URL
const __filename = fileURLToPath(import.meta.url);
// Get the directory name of the current module
const __dirname = dirname(__filename);

// Configure env
dotenv.config();

// Database config
connectDB();

// Create Express app
const app = express();

// Port
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Serve static files
app.use(express.static(resolve(__dirname, "client", "dist")));

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// Catch-all route for serving the index.html
app.use("*", (req, res) => {
  res.sendFile(resolve(__dirname, "client", "dist", "index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
