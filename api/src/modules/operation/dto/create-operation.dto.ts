import * as Joi from 'joi';

export const CreateOperationDto = Joi.object({
  employee_id: Joi.number().integer().required(),
  profession_id: Joi.number().integer().required(),
  department_id: Joi.number().integer().required(),
  salary: Joi.number().integer().min(22440).required(), // 22400 - мрот по ярославской области
});
