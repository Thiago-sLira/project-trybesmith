import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { User } from '../types/trybesmith.types';
import statusCodes from '../statusCodes';

const validateNewUserBody = (userBody: User) => (
  Joi.object({
    username: Joi.string().min(3).required().messages({
      'string.required': '"username" must be a string',
      'string.min': '"username" length must be at least 3 characters long',
    }),
    vocation: Joi.string().min(3).required().messages({
      'string.required': '"vocation" must be a string',
      'string.min': '"vocation" length must be at least 3 characters long',
    }),
    level: Joi.number().min(1).required().messages({
      'string.required': '"level" must be a number',
      'string.min': '"level" must be greater than or equal to 1',
    }),
    password: Joi.string().min(8).required().messages({
      'string.required': '"password" must be a string',
      'string.min': '"password" length must be at least 8 characters long',
    }),
  }).validate(userBody)
);

export default (req: Request, res: Response, next: NextFunction) => {
  const { username, vocation, level, password } = req.body;

  const { error } = validateNewUserBody({ username, vocation, level, password });
  if (error) {
    const codeResponse = error.message.includes('required')
      ? statusCodes.BAD_REQUEST
      : statusCodes.UNPROCESSABLE_ENTITY;
    return res.status(codeResponse).json({ message: error.message });
  }

  return next();
};