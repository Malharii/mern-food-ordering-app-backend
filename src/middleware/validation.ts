import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";
const handleValidationErrors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateMyUserRequest = [
  body("name").isString().notEmpty().withMessage("Name must be String"),
  body("addressLine1")
    .isString()
    .notEmpty()
    .withMessage("AddressLine1 must be a String"),
  body("city").isString().notEmpty().withMessage("City must be String"),
  body("country").isString().notEmpty().withMessage("Country must be String"),
  // body("mobileNo")
  //   .isString()
  //   .notEmpty()
  //   .withMessage("Mobile-No must be Number"),
  handleValidationErrors,
];
