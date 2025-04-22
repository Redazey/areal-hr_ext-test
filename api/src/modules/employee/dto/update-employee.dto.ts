import * as Joi from 'joi';

export const UpdateEmployeeDto = Joi.object({
  id: Joi.number().optional(),
  last_name: Joi.string().min(3).max(255).optional(),
  first_name: Joi.string().min(3).max(255).optional(),
  patronymic: Joi.string().min(3).max(255).optional(),
  dob: Joi.date().optional(),
  passport: Joi.string().min(10).max(255).optional(),
  registration_address: Joi.string().min(3).max(255).optional(),
  passport_scan: Joi.number().optional(),
});
