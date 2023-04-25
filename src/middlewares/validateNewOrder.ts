import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { Product } from '../types/trybesmith.types';
import statusCodes from '../statusCodes';

const validateNewOrderBody = (productBody: Product) => (
  Joi.object({
    productsIds: Joi.array().items(Joi.number().required()).required().messages({
      'array.includesRequiredUnknowns': '"productsIds" must include only numbers',
      'number.base': '"productsIds" must include only numbers',
    }),
  }).validate(productBody)
);

// console.log(Joi.object({
//   productsIds: Joi.array().items(Joi.number().required()).required(),
// }).validate({ productsIds: null }).error);

export default (req: Request, res: Response, next: NextFunction) => {
  const orderBody = req.body;
  const { error } = validateNewOrderBody(orderBody);

  if (error) {
    const codeResponse = error.details[0].type === 'array.base'
      || error.details[0].type === 'array.includesRequiredUnknowns'
      ? statusCodes.UNPROCESSABLE_ENTITY
      : statusCodes.BAD_REQUEST;
    return res.status(codeResponse).json({ message: error.message });
  }

  return next();
};
