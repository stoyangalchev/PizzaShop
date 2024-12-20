import mongoose from "mongoose";

const pizzaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: false },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("pizzas", pizzaSchema);
