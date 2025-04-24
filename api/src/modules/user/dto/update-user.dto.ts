import * as Joi from 'joi';

export const UpdateUserDto = Joi.object({
  id: Joi.number().optional(),
  last_name: Joi.string().min(3).max(255).optional(),
  first_name: Joi.string().min(3).max(255).optional(),
  patronymic: Joi.string().min(3).max(255).optional(),
  email: Joi.string().email().optional(),
  password: Joi.string().min(10).max(255).optional(),
  role_id: Joi.number().optional(),
});
