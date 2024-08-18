import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Image from "./Image.js";
import Category from "./Category.js";
import ProductOption from "./ProductOption.js";

const Product = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
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
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    price_with_discount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

Product.hasMany(Image, {
  constraints: false,
});


Product.hasMany(ProductOption, {
  constraints: false,
});

Product.belongsToMany(Category, {
  through: "category_product",
  constraint: true,
  as: "categories",
});

(async () => {
  await await Product.sync();
})();

export default Product;
