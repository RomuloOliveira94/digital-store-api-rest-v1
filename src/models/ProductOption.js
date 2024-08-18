import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import Product from "./Product.js";

const ProductOption = sequelize.define(
  "product_option",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shape: {
      type: DataTypes.ENUM("square", "circle"),
      allowNull: true,
    },
    radius: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    type: {
      type: DataTypes.ENUM("text", "color"),
      allowNull: true,
    },
    values: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

ProductOption.belongsTo(Product);

(async () => {
  await ProductOption.sync();
})();

export default ProductOption;
