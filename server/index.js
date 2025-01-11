import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import pizzaRoute from "./routes/pizzaRoute.js";
import contactRoute from "./routes/contactRoute.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Increase payload size limit
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://pizzashop-218v.onrender.com",
      "https://pizzashop-one.vercel.app",
    ], // Allow requests from this origin
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
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
