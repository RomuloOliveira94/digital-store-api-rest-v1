import { Op } from "sequelize";
import Product from "../models/Product.js";

export const getAll = async (query) => {
  let limit = query.limit || 12;
  let page = query.page || 1;
  let fields = query.fields
    ? query.fields.split(",")
    : ["name", "images", "price"];
  let match = query.match || "";
  let category_ids = query.category_ids
    ? query.category_ids.split(",").map((id) => parseInt(id))
    : [];
  let price_range = query.price_range
    ? query.price_range.split("-").map((price) => parseFloat(price))
    : [0, 1000000];
  let option = query.option ? query.option : "";

  const whereClause = {
    [Op.and]: [
      {
        name: {
          [Op.like]: `%${match}%`,
        },
      },
      {
        description: {
          [Op.like]: `%${match}%`,
        },
      },
      {
        price: {
          [Op.between]: price_range,
        },
      },
      {
        "$product_options.values$": {
          [Op.like]: `%${option}%`,
        },
      },
    ],
  };

  if (category_ids && category_ids.length > 0) {
    whereClause[Op.and].push({
      "$categories.id$": {
        [Op.in]: category_ids,
      },
    });
  }

  try {
    if (limit === "-1") {
      const products = await Product.findAll({
        include: ["categories", "images", "product_options"],
        attributes: fields,
        where: whereClause,
      });

      return {
        data: products,
        limit: limit,
        page: page,
        total: products.length,
      };
    }

    const products = await Product.findAll({
      include: ["categories", "images", "product_options"],
      attributes: fields,
      limit: limit,
      offset: (page - 1) * limit,
      subQuery: false,
      where: whereClause,
    });
    return {
      data: products,
      limit: limit,
      page: page,
      total: products.length,
    };
  } catch (error) {
    return { message: error.message };
  }
};

export const findById = async (id) => {
  try {
    const product = await Product.findByPk(id, {
      include: ["categories", "images", "product_options"],
    });
    return product;
  } catch (error) {
    return { message: error.message };
  }
};

export const create = async (data) => {
  try {
    const product = await Product.create(data, {
      include: ["images", "product_options"],
    });
    product.setCategories(data.categories);
    return product;
  } catch (error) {
    return { message: error.message };
  }
};

export const update = async (id, data) => {
  try {
    const product = await Product.findByPk(id);
    if (product) {
      await product.update(data, {
        include: ["categories", "images", "product_options"],
      });
      product.setCategories(data.categories);
      return product;
    }
    return { message: "Produto não encontrado" };
  } catch (error) {
    return { message: error.message };
  }
};

export const deleteById = async (id) => {
  try {
    const product = await Product.findByPk(id);
    if (product) {
      await product.destroy();
      return { message: "Produto deletado com sucesso" };
    }
    return { message: "Produto não encontrado" };
  } catch (error) {
    return { message: error.message };
  }
};
