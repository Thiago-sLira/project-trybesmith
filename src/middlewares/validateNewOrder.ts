import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { Product } from '../types/trybesmith.types';
import statusCodes from '../statusCodes';

const validateNewOrderBody = (productBody: Product) => (
  Joi.object({
    productsIds: Joi.array().items(Joi.number().required()).required(),
  }).validate(productBody)
);

console.log(Joi.object({
  productsIds: Joi.array().items(Joi.number().required()).required(),
}).validate({ productsIds: null }).error);

export default (req: Request, res: Response, next: NextFunction) => {
  const orderBody = req.body;
  const { error } = validateNewOrderBody(orderBody);

  if (error) {
    const codeResponse = error.details[0].type === 'array.base'
      || error.details[0].type === 'array.includesRequiredUnknowns'
      ? statusCodes.BAD_REQUEST
      : statusCodes.UNPROCESSABLE_ENTITY;
    return res.status(codeResponse).json({ message: error.message });
  }

  return next();
};
