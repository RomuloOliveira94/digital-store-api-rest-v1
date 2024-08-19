import jwt from "jsonwebtoken";

export default function (req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(400).json({ message: "Token não informado" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(400).json({ message: "Token inválido" });
    }

    req.userId = decoded.id;
    next();
  });
}
