import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import pizzaRoute from "./routes/pizzaRoute.js";
import contactRoute from "./routes/contactRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from this origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Allow cookies to be sent
    optionsSuccessStatus: 204,
  })
);
app.use(express.json());

// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Use routes
app.use("/api/pizzas", pizzaRoute);
app.use("/api/contact", contactRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
