import Joi from 'joi';

export const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().min(3).required(),
  role: Joi.string().valid('USER', 'ADMIN'),
});
