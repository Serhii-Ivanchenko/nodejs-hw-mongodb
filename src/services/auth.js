import createHttpError from 'http-errors';
import { UserCollection } from '../db/models/user.js';
import bcrypt from 'bcrypt';

export const registerUser = async (payload) => {
  const newUser = await UserCollection.findOne({
    email: payload.email,
  });

  if (newUser) {
    throw createHttpError(409, 'Email is already used');
  }

  const hashedPassword = await bcrypt.hash(payload.password, 10);

  return await UserCollection.create({ ...payload, password: hashedPassword });
};
