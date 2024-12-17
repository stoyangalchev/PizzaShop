import Pizza from "../../models/pizzaModel.js";

export const getPizzas = async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.send(pizzas);

  } catch (error) {
    res.status(400).json(error);
  }
};

export const filterPizza = async (req, res) => {
  const { category, query } = req.body;
  let userPattern = new RegExp(query, "i");
  try {
    let pizzas;
    if (!category && query) {
      pizzas = await Pizza.find({ name: { $regex: userPattern } });
    } else if (!query && category && category !== "all") {
      pizzas = await Pizza.find({ category });
    } else if (query && category) {
      pizzas = await Pizza.find({ name: { $regex: userPattern }, category });
    } else {
      pizzas = await Pizza.find();
    }
    res.send(pizzas);
  } catch (error) {
    res.status(400).json(error);
  }
};
