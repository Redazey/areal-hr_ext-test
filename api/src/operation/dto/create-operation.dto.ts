import * as Joi from 'joi';

export const CreateOperationDto = Joi.object({
    employeeId: Joi.number().integer().required(),
    professionId: Joi.number().integer().required(),
    departmentId: Joi.number().integer().required(),
    salary: Joi.number().integer().min(22440).required() // 22400 - мрот по ярославской области
});