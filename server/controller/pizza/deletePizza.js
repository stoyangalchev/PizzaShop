import Pizza from "../../models/pizzaModel.js";

export const deletePizza = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPizza = await Pizza.findByIdAndDelete(id);

    if (!deletedPizza) {
      return res.status(404).json({ message: "Pizza not found" });
    }

    res.status(200).json({ message: "Pizza deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete pizza", error });
  }
};
