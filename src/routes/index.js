import express from "express";
import UserRoutes from "./UserRoutes.js";
import ProductRoutes from "./ProductRoutes.js";
import CategoryRoutes from "./CategoryRoutes.js";

const router = express.Router();

router.use("/users", UserRoutes);
router.use("/products", ProductRoutes);
router.use("/categories", CategoryRoutes);

export default router;
