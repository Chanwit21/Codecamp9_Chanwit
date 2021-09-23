const { QueryTypes } = require('sequelize');
const { Account, Customer, Branch, sequelize, Sequelize } = require('../models');

exports.getAllAccount = async (req, res, next) => {
  try {
    const accounts = await Account.findAll();
    res.status(200).json({ accounts });
  } catch (err) {
    next(err);
  }
};

exports.getAccountById = async (req, res, next) => {
  const targetId = req.params.id;
  const account = await Account.findOne({
    where: { id: targetId },
  });
  res.status(200).json({ account });
};

exports.createAccount = async (req, res, next) => {
  try {
    const { name } = req.body;
    const account = await Account.create({
      name,
    });
    res.status(200).json({ account });
  } catch (err) {
    next(err);
  }
};

exports.updateAccount = async (req, res, next) => {
  try {
    const targetId = req.params.id;
    const { name } = req.body;
    await Account.update(
      {
        name,
      },
      { where: { id: targetId } }
    );
    res.status(200).json();
  } catch (err) {
    next(err);
  }
};

exports.deleteAccount = async (req, res, next) => {
  try {
    const targetId = req.params.id;
    await Account.destroy({
      where: { id: targetId },
    });
    res.status(204).json();
  } catch (err) {
    next(err);
  }
};

exports.getAccountsByCustomerId = async (req, res, next) => {
  const targetId = req.params.id;
  // const customer = await Customer.findOne({
  //   where: { id: targetId },
  //   attributes: { exclude: ['createdAt', 'updatedAt'] },
  //   include: {
  //     model: Account,
  //     attributes: ['id', 'openDate', 'balance'],
  //     include: {
  //       attributes: { exclude: ['createdAt', 'updatedAt'] },
  //       model: Branch,
  //     },
  //   },
  // });
  // res.status(200).json({ customer });

  // const sql =
  //   'SELECT a.id AS id, a.open_date AS openDate, a.balance AS balance,c.id AS cId,' +
  //   ' c.first_name AS firstName, c.last_name AS lastName, c.gender AS gender, c.birth_date AS birthDate,' +
  //   'c.address AS address, b.name AS name FROM accounts a LEFT JOIN customers c ON a.customer_id = c.id' +
  //   ' LEFT JOIN branches b ON b.id = a.branch_id WHERE c.id = :customerId';

  // const accounts = await sequelize.query(sql, {
  //   type: QueryTypes.SELECT,
  //   replacements: { customerId: targetId },
  // });
  // res.status(200).json({ accounts });

  const result = await Account.findAll({
    attribute: ['customerId', [Sequelize.fn('SUM', Sequelize.col('balance')), 'total']],
    group: ['customerId'],
    include: Customer,
  });
  res.status(200).json({ result });
};

exports.getAccountsByBranchId = async (req, res, next) => {
  const targetId = req.params.id;
  const branch = await Branch.findOne({
    where: { id: targetId },
    include: {
      model: Account,
    },
  });
  res.status(200).json({ branch });
};

exports.getAccountsByBranchIdAndCustomerId = async (req, res, next) => {
  const { branchId, customerId } = req.params;
  const branch = await Branch.findOne({
    where: { id: branchId },
    include: {
      attribute: { exclude: ['createAt', 'updateAt'] },
      model: Account,
      where: { customerId: customerId },
    },
  });
  res.status(200).json({ branch });
};
