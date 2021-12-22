const validationMiddleware = require("../../middlewares/validation");
const { body } = require("express-validator");
const ROLES = require('../../config/roles');
import isAuthorized from '../../middlewares/authorized-admin-role';

const validationsUpdateUser = [
    isAuthorized,
    body("role")
        .exists()
        .optional()
        .isNumeric()
        .isIn(ROLES)
        .withMessage("The role must have one of the following values " + ROLES.join(", ")),
  validationMiddleware,
];

module.exports = validationsUpdateUser;