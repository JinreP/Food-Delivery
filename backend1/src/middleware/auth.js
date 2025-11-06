import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.body.token || req.headers["authorization"];

  if (!token) {
    return res.status(403).send({ message: "Token is required" });
  }

  const BearerToken = token.split(" ")[1];
  try {
    const decoded = jwt.verify(BearerToken, "secret-key");
    next();
  } catch (error) {
    console.error(error);
    res.send({ error });
  }
};
