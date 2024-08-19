import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getAll = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    return { message: error.message };
  }
};

export const findById = async (id) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return { message: "Usuário não encontrado" };
    }
    return user;
  } catch (error) {
    return { message: error.message };
  }
};

export const create = async (data) => {
  try {
    let password = await bcrypt.hash(data.password, 10);
    data.password = password;
    const user = await User.create(data);
    return user;
  } catch (error) {
    return { message: error.message };
  }
};

export const update = async (id, data) => {
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.update(data);
      return user;
    }
    return { message: "Usuário não encontrado" };
  } catch (error) {
    return { message: error.message };
  }
};

export const deleteById = async (id) => {
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      return { message: "Usuário deletado com sucesso" };
    }
    return { message: "Usuário não encontrado" };
  } catch (error) {
    return { message: error.message };
  }
};

export const auth = async (email, password) => {
  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return { message: "Usuário não encontrado" };
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return { message: "Senha inválida" };
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return token;
  } catch (error) {
    return { message: error.message };
  }
};
