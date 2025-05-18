import * as Joi from 'joi';

export const CreateDepartmentDto = Joi.object({
  name: Joi.string().min(3).max(255).required(),
  comment: Joi.string().max(500).optional(),
  organization_id: Joi.number().integer().required(),
  parent_department_id: Joi.number().integer().optional(),
});
