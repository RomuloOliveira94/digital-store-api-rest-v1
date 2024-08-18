import Product from "../models/Product.js";

export const getAll = async () => {
  try {
    const products = await Product.findAll();
    return products;
  } catch (error) {
    return { message: error.message };
  }
};

export const findById = async (id) => {
  try {
    const product = await Product.findByPk(id);
    return product;
  } catch (error) {
    return { message: error.message };
  }
};

export const create = async (data) => {
  try {
    const product = await Product.create(data);
    return product;
  } catch (error) {
    return { message: error.message };
  }
};

export const update = async (id, data) => {
  try {
    const product = await Product.findByPk(id);
    if (product) {
      await product.update(data);
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
