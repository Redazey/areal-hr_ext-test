import * as Joi from 'joi';

export const CreateEmployeeDto = Joi.object({
    last_name: Joi.string().min(3).max(255).required(),
    first_name: Joi.string().min(3).max(255).required(),
    patronymic: Joi.string().min(3).max(255).optional(),
    dob: Joi.date().required(),
    passport: Joi.string().min(10).max(255).required(),
    registration_address: Joi.string().min(3).max(255).required(),
    passport_scan: Joi.number().required(),
});