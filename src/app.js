import express from "express";
import router from "./routes/index.js";
import authMiddleware from "./middleware/authMiddleware.js";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  if (
    ["POST", "PUT", "DELETE"].includes(req.method) &&
    req.url !== "/api/user/token" &&
    req.url !== "/api/user/register"
  ) {
    return authMiddleware(req, res, next);
  }
  next();
});

app.use("/api", router);

export default app;
