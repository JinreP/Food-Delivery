import { foodOrder } from "../models/foodOrder.js";

export const createFoodOrder = async (req, res) => {
  try {
    await foodOrder.create({
      user: req.body.user,
      totalPrice: req.body.totalPrice,
      items: req.body.items,
      status: req.body.status,
    });
    res.status(200).send({ message: "successful", data: req.body });
  } catch (error) {
    res.status(500).send({ message: "Error", data: error.message });
  }
};

export const getFoodOrder = async (req, res) => {
  const userId = req.params.userId;
  console.log("getFoodOrder picked userId:", userId, "params:", req.params);

  try {
    const result = await foodOrder
      .find({ user: userId })
      .populate([{ path: "items.foodId" }]);

    console.log(result);
    if (!result || result.length === 0) {
      return res.status(404).json({ message: "No orders found for this user" });
    }

    res.status(200).send(result);
  } catch (error) {
    console.log("working", error);

    res.status(500).send(error, "errr");
  }
};

export const updateFoodOrder = async (req, res) => {
  try {
    const foodOrderId = req.params.id;
    const result = await foodOrder.findByIdAndUpdate(foodOrderId, req.body);
    res.status(200).send({ result });
  } catch (error) {
    res.status(500).send(error, "errr");
  }
};

export const deleteFoodOrderById = async (req, res) => {
  try {
    const cancelFoodOrder = await foodOrder.findByIdAndDelete(req.params.id);
    if (!cancelFoodOrder) {
      return res.status(404).send("no food found");
    } else {
      res.send({ message: "canceled food order", foodOrder: cancelFoodOrder });
    }
  } catch (error) {
    console.error(error);
    res.send({ error: "failed to cancel the order" });
  }
};
