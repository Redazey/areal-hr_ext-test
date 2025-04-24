import * as Joi from 'joi';

export const CreateUserDto = Joi.object({
  last_name: Joi.string().min(3).max(255).required(),
  first_name: Joi.string().min(3).max(255).required(),
  patronymic: Joi.string().min(3).max(255).optional(),
  email: Joi.string().email().required(),
  password: Joi.string().min(10).max(255).required(),
  role_id: Joi.number().required(),
});
