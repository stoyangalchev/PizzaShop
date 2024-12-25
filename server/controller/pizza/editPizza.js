import Pizza from "../../models/pizzaModel.js";

export const editPizza = async (req, res) => {
  const { id } = req.params;
  const { name, price, category, description } = req.body;
  const image = req.body.image || "";

  try {
    const pizza = await Pizza.findById(id);

    if (!pizza) {
      return res.status(404).json({ message: "Pizza not found" });
    }

    pizza.name = name || pizza.name;
    pizza.price = price || pizza.price;
    pizza.category = category || pizza.category;
    pizza.description = description || pizza.description;
    if (image) {
      pizza.image = image;
    }

    await pizza.save();
    res.status(200).json(pizza);
  } catch (error) {
    res.status(400).json({ message: `Some error occurred: ${error}` });
  }
};
