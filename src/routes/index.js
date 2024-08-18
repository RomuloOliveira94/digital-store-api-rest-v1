import express from "express";
import UserRoutes from "./UserRoutes.js";
import ProductRoutes from "./ProductRoutes.js";
import CategoryRoutes from "./CategoryRoutes.js";

const router = express.Router();

router.use("/user", UserRoutes);
router.use("/product", ProductRoutes);
router.use("/category", CategoryRoutes);

export default router;
