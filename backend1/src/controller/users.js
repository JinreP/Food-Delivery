import bcrypt from "bcrypt";
import { usersSchema } from "../models/users.js";

export const signUp = async (req, res) => {
  try {
    const { body } = req;
    const { email, password } = body;

    const hashedPassword = await bcrypt.hashSync(password, 10);

    const user = await usersSchema.create({
      email,
      password: hashedPassword,
    });

    res.status(200).send({ message: "Success", data: user });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error", data: error });
  }
};

export const updateUsers = async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await usersSchema.findByIdAndUpdate(userId, req.body);

    res.status(200).send({ result });
  } catch (error) {
    res.status(500).send(error, "errr");
  }
};

export const getUsers = async (req, res) => {
  try {
    const result = await usersSchema.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error, "erro");
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deleteUser = await usersSchema.findByIdAndDelete(req.params.id);
    if (!deleteUser) {
      return res.status(404).send("no user found");
    } else {
      res.send({ message: "user is deleted", data: deleteUser });
    }
  } catch (error) {
    console.error(error);
    res.send({ error: "failed to delete the user" });
  }
};

export const login = async (req, res) => {
  try {
    const { body } = req;
    const { email, password } = body;

    const user = await usersSchema.findOne({ email });

    if (!user.length) {
      res.status(500).send("ali deerin sign up hiisen bn");
    }

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);

    if (!isPasswordCorrect) {
      res.status(403).send({ message: "password is wrong" });
    }

    res.status(200).send({ message: "success", data: user });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error", data: error });
  }
};
