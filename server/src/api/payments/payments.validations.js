const db = require("../../db/models/index.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const logger = require("../../utils/logger.js");
const {
  CardCompaniesErrors,
} = require("../cardCompanies/cardCompanies.errors.js");
const {
  PaymentsTypesErrors,
} = require("../paymentsTypes/paymentsTypes.errors.js");
const { UsersErrors } = require("../users/users.errors.js");

const CardCompanies = db.cardCompanies;
const PaymentsTypes = db.paymentsTypes;
const Users = db.users;

const createAndUpdatePayment = async (req, res, next) => {
  try {
    const { cardCompanyId, paymentTypeId, userId } = req.body;

    //Check if cardCompanyId exists in card-companies table
    const existingCardCompany = await CardCompanies.findByPk(cardCompanyId);
    if (!existingCardCompany) {
      return res.status(404).json({
        message: CardCompaniesErrors.CARD_COMPANY_NOT_FOUND,
      });
    }

    //Check if paymentTypeId exists in payments-types table
    const existingPaymentType = await PaymentsTypes.findByPk(paymentTypeId);
    if (!existingPaymentType) {
      return res.status(404).json({
        message: PaymentsTypesErrors.PAYMENT_TYPE_NOT_FOUND,
      });
    }

    //Check if userId exists in user table
    const existingUser = await Users.findByPk(userId);
    if (!existingUser) {
      return res.status(404).json({
        message: UsersErrors.USER_NOT_FOUND,
      });
    }

    return req.body;
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

module.exports = {
  createAndUpdatePayment,
};
