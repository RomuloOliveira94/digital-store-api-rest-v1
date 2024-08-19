import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  token,
} from "../controllers/UserController.js";
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/register", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

router.post("/token", token);

export default router;
