import mongoose from "mongoose";

const pizzaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    varients: [],
    prices: [],
    category: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("pizzas", pizzaSchema);
