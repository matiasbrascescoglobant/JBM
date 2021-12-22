const validationMiddleware = require("../../middlewares/validation");
const { body } = require("express-validator");
const ROLES = require('../../config/roles');

const validationsCreateUser = [
    body('name').notEmpty().withMessage('Name is required'),
    body('username').notEmpty().withMessage('User name is required'),
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Email have to have email@email.com format'),
    body('password').notEmpty().withMessage('Password is required'),
    body("role")
      .exists()
      .optional()
      .isIn(ROLES)
      .withMessage("The role must have one of the following values " + ROLES.join(", ")),
    validationMiddleware,
  ];

  module.exports = validationsCreateUser;