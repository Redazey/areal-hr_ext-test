import * as Joi from 'joi';

export const UpdateDepartmentDto = Joi.object({
    name: Joi.string().min(3).max(255).optional(),
    comment: Joi.string().max(500).optional(),
    organizationId: Joi.number().integer().optional(),
    parentDepartmentId: Joi.number().integer().optional(),
});