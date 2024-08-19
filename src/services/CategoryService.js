import Category from "../models/Category.js";

export const getAll = async (query) => {
  try {
    let limit = query.limit || 12;
    let page = query.page || 1;
    let fields = query.fields
      ? query.fields.split(",")
      : ["name", "slug", "use_in_menu"];
    let use_in_menu = query.use_in_menu == "false" ? false : true;


    if (limit === "-1") {
      const categories = await Category.findAll({
        attributes: fields,
        where: { use_in_menu: use_in_menu },
      });

      return {
        data: categories,
        limit: limit,
        page: page,
        total: categories.length,
      };
    }

    const categories = await Category.findAll({
      attributes: fields,
      where: { use_in_menu: use_in_menu },
      limit: limit,
      offset: (page - 1) * limit,
    });

    return {
      data: categories,
      limit: limit,
      page: page,
      total: categories.length,
    };
  } catch (error) {
    return { message: error.message };
  }
};

export const findById = async (id) => {
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      return { message: "Categoria não encontrada" };
    }
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
