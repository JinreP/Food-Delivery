import { food } from "../models/foods.js";

export const createFood = async (req, res) => {
  try {
    await food.create({
      food: req.body.food,
      price: req.body.price,
      image: req.body.image,
      ingredients: req.body.ingredients,
    });
    res.status(200).send({ message: "successful", data: req.body });
  } catch (error) {
    res.status(500).send({ message: "hool hiihed aldaa garla", data: null });
  }
};

export const getFood = async (req, res) => {
  try {
    const result = await food.find();
    res.status(200).send(result);
  } catch (error) {
    res.send(500).send(error, "errr");
  }
};

export const updateFood = async (req, res) => {
  try {
    const foodId = req.params.id;
    const result = await food.findByIdAndUpdate(foodId, req.body);
    res.status(200).send({ result });
  } catch (error) {
    res.status(500).send(error, "errr");
  }
};

export const deleteFood = async (req, res) => {
  try {
    const deleteFood = await food.findByIdAndDelete(req.params.id);
    if (!deleteFood) {
      return res.status(404).send("no food found");
    } else {
      res.send({ message: "food is deleted", food: deleteFood });
    }
  } catch (error) {
    console.error(error);
    res.send({ error: "failed to delete food" });
  }
};
