import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Product from "./Product.js";

const Category = sequelize.define(
  "category",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    use_in_menu: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

(async () => {
  await Category.sync();
  Category.belongsToMany(Product, { through: "product_category" });
})();

export default Category;
