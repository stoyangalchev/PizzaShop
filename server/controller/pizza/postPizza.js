import Pizza from "../../models/pizzaModel.js";
export const postPizza = async (req, res) => {
  const pizza = req.body;
  console.log(pizza);

  try {
    const newPizza = new Pizza({
      name: pizza.name,
      varients: ["small", "medium", "large"],
      prices: [pizza.prices],
      category: pizza.category,
      image: pizza.image,
      description: pizza.description,
    });

    await newPizza.save();
    res.status(200).send("New Pizza Added successfully");
  } catch (error) {
    res.status(400).json({ message: `Some error occured ${error}` });
  }
};
