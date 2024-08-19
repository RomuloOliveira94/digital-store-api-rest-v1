import {
  getAll,
  findById,
  create,
  update,
  deleteById,
  auth,
} from "../services/UserService.js";

export const getUsers = async (req, res) => {
  try {
    const users = await getAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await update(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const message = await deleteById(req.params.id);
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const token = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await auth(email, password);
    res.status(200).json(token);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
