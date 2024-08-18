import Category from "../models/Category.js";

export const getAll = async () => {
  try {
    const categories = await Category.findAll();
    return categories;
  } catch (error) {
    return { message: error.message };
  }
};

export const findById = async (id) => {
  try {
    const category = await Category.findByPk(id);
    return category;
  } catch (error) {
    return { message: error.message };
  }
};

export const create = async (data) => {
  try {
    const category = await Category.create(data);
    return category;
  } catch (error) {
    return { message: error.message };
  }
};

export const update = async (id, data) => {
  try {
    const category = await Category.findByPk(id);
    if (category) {
      await category.update(data);
      return category;
    }
    return { message: "Categoria não encontrada" };
  } catch (error) {
    return { message: error.message };
  }
};

export const deleteById = async (id) => {
  try {
    const category = await Category.findByPk(id);
    if (category) {
      await category.destroy();
      return { message: "Categoria deletada com sucesso" };
    }
    return { message: "Categoria não encontrada" };
  } catch (error) {
    return { message: error.message };
  }
};
