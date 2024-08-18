import {
  getAll,
  findById,
  create,
  update,
  deleteById,
} from "../services/CategoryService.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await getAll(req.query);
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const category = await findById(req.params.id);
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const category = await create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const category = await update(req.params.id, req.body);
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const message = await deleteById(req.params.id);
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
