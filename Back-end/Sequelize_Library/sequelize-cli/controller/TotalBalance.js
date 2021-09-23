const { Customer, Branch, Account, Sequelize } = require('../models');

exports.byCustomer = async (req, res, next) => {
  const totalbalances = await Account.findAll({
    group: ['customer_id'],
    include: {
      model: Customer,
    },
    attributes: ['customer_id', [Sequelize.fn('SUM', Sequelize.col('balance')), 'total_balance']],
  });
  res.status(200).json({ totalbalances });
};

exports.byBranch = async (req, res, next) => {
  const totalbalances = await Account.findAll({
    group: ['branch_id'],
    include: {
      model: Branch,
    },
    attributes: ['branch_id', [Sequelize.fn('SUM', Sequelize.col('balance')), 'total_balance']],
  });
  res.status(200).json({ totalbalances });
};
