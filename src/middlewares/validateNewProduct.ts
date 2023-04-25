import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { Product } from '../types/trybesmith.types';
import statusCodes from '../statusCodes';

const validateNewProductBody = (productBody: Product) => (
  Joi.object({
    name: Joi.string().min(3).required().messages({
      'string.required': '"name" must be a string',
      'string.min': '"name" length must be at least 3 characters long',
    }),
    amount: Joi.string().min(3).required().messages({
      'string.required': '"amount" must be a string',
      'string.min': '"amount" length must be at least 3 characters long',
    }),
  }).validate(productBody)
);

export default (req: Request, res: Response, next: NextFunction) => {
  const productBody = req.body;
  const { error } = validateNewProductBody(productBody);

  if (error) {
    const codeResponse = error.message.includes('required')
      ? statusCodes.BAD_REQUEST
      : statusCodes.UNPROCESSABLE_ENTITY;
    return res.status(codeResponse).json({ message: error.message });
  }

  return next();
};
