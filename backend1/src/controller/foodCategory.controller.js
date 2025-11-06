import { foodCategory } from "../models/foodCategory.js";

export const createFoodCategory = async (req, res) => {
  try {
    await foodCategory.create({
      category: req.body.category,
    });
    res.status(200).send({ message: "successful", data: req.body });
  } catch (error) {
    res.status(500).send({ message: "Error", data: null });
  }
};

export const getFoodCategory = async (req, res) => {
  try {
    const result = await foodCategory.find();
    res.status(200).send(result);
  } catch (error) {
    res.send(500).send(error, "errr");
  }
};

export const updateFoodCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const result = await foodCategory.findByIdAndUpdate(categoryId, req.body);
    res.status(200).send({ result });
  } catch (error) {
    res.status(500).send(error, "errr");
  }
};

export const deleteFoodcategoryById = async (req, res) => {
  try {
    const deleteCategory = await foodCategory.findByIdAndDelete(req.params.id);
    if (!deleteCategory) {
      return res.status(404).send("no category found");
    } else {
      res.send({ message: "category deleted", category: deleteCategory });
    }
  } catch (error) {
    console.error(error);
    res.send({ error: "failed to delete category" });
  }
};
