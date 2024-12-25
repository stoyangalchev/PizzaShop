import Pizza from "../../models/pizzaModel.js";

export const postPizza = async (req, res) => {
  const { name, price, category, description } = req.body;
  const image = req.body.image || "";

  try {
    const newPizza = new Pizza({
      name,
      price,
      category,
      description,
      image,
    });

    await newPizza.save();
    res.status(200).send("New Pizza Added successfully");
  } catch (error) {
    res.status(400).json({ message: `Some error occurred: ${error}` });
  }
};
