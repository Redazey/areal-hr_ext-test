import * as Joi from 'joi';

export const UpdateProfessionDto = Joi.object({
  name: Joi.string().min(3).max(255).optional(),
  comment: Joi.string().max(500).optional(),
});
