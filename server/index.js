import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import pizzaRoute from "./routes/pizzaRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


// Middleware
app.use(express.json());

// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Use routes
app.use("/api/pizzas", pizzaRoute);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
