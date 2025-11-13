import bcrypt from "bcrypt";
import { usersSchema } from "../models/users.js";
import jwt from "jsonwebtoken";
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
    const result = await usersSchema.findOne({
      _id: "69082033f2cf5af9c2cbe41b",
    });

    res.status(200).send({ result, token });
  } catch (error) {
    res.status(500).send(error, "error");
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
  console.log("working");
  try {
    const { body } = req;
    const { email, password } = body;

    const user = await usersSchema.findOne({ email });

    // if (!user.length) {
    //   res.status(500).send("User already exist");
    // }

    if (!email || !password) {
      return res.status(403).send({ message: "pass and email is required" });
    }

    // if (typeof user.password !== "string") {
    //   console.log("Invalid password type:", user.password);
    //   return res.status(500).send({ message: "Invalid password format" });
    // }

    const isPasswordCorrect = bcrypt.compareSync(
      String(password),
      String(user.password)
    );
    console.log("working");

    console.log(isPasswordCorrect);

    if (!isPasswordCorrect) {
      res.status(403).send({ message: "password is wrong" });
    }

    const token = jwt.sign({ ...user }, "secret-key", {
      expiresIn: "1h",
    });
    res.status(200).send({
      message: "success",
      token: token,
      user: { email: user.email, _id: user._id },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error", data: error.message });
  }
};
