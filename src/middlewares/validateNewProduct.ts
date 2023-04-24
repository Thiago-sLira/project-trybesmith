import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { Product } from '../types/trybesmith.types';
import statusCodes from '../statusCodes';

const validateNewProductBody = (body: Product) => (
  Joi.object({
    name: Joi.string().min(3).required().messages({
      'string.required': '"name" must be a string',
      'string.min': '"name" length must be at least 3 characters long',
    }),
    amount: Joi.string().min(3).required().messages({
      'string.required': '"amount" must be a string',
      'string.min': '"amount" length must be at least 3 characters long',
    }),
  }).validate(body)
);

export default (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  const { error } = validateNewProductBody({ name, amount });

  if (!name || !amount) {
    const message = `"${!name ? 'name' : 'amount'}" is required`;
    return res.status(statusCodes.BAD_REQUEST).json({ message });
  }

  if (error) {
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json({ message: error.message });
  }

  return next();
};