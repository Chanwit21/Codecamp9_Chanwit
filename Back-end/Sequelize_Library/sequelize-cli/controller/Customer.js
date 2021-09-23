const { Customer } = require('../models');

exports.getAllCustomer = async (req, res, next) => {
  try {
    const customers = await Customer.findAll();
    res.status(200).json({ customers });
  } catch (err) {
    next(err);
  }
};

exports.getCustomerById = async (req, res, next) => {
  try {
    const targetId = req.params.id;
    const customer = await Customer.findOne({ where: { id: targetId } });
    res.status(200).json({ customer });
  } catch (err) {
    next(err);
  }
};

exports.createCustomer = async (req, res, next) => {
  try {
    const { firstName, lastName, gender, birthDate, address } = req.body;
    const customer = await Customer.create({
      firstName,
      lastName,
      gender,
      birthDate,
      address,
    });
    res.status(200).json({ customer });
  } catch (err) {
    next(err);
  }
};

exports.updateCustomer = async (req, res, next) => {
  try {
    const targetId = req.params.id;
    const { firstName, lastName, gender, birthDate, address } = req.body;
    const rows = await Customer.update(
      { firstName, lastName, gender, birthDate, address },
      { where: { id: targetId } }
    );
    if (rows[0] === 0) return res.status(404).json({ message: 'update failed' });
    res.status(200).json();
  } catch (err) {
    next(err);
  }
};

exports.deleteCustomer = async (req, res, next) => {
  try {
    const targetId = req.params.id;
    const rows = await Customer.destroy({ where: { id: targetId } });
    if (rows === 0) return res.status(404).json({ message: 'delete failed' });
    res.status(204).json();
  } catch (err) {
    next(err);
  }
};
