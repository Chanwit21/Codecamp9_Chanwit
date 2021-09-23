const { Branch, Account } = require('../models');

exports.getAllBranch = async (req, res, next) => {
  try {
    const branches = await Branch.findAll({
      attribute: {
        exclude: ['createdAt', 'updatedAt'],
      },
      order: ['name'],
    });
    res.status(200).json({ branches });
  } catch (err) {
    next(err);
  }
};

exports.getBranchById = async (req, res, next) => {
  const targetId = req.params.id;
  const branch = await Branch.findOne({
    where: { id: targetId },
    attribute: {
      exclude: ['createdAt', 'updatedAt'],
    },
  });
  res.status(200).json({ branch });
};

exports.createBranch = async (req, res, next) => {
  try {
    const { name } = req.body;
    const branch = await Branch.create({
      name,
    });
    res.status(200).json({ branch });
  } catch (err) {
    next(err);
  }
};

exports.updateBranch = async (req, res, next) => {
  try {
    const targetId = req.params.id;
    const { name } = req.body;
    const rows = await Branch.update(
      {
        name,
      },
      { where: { id: targetId } }
    );
    if (rows[0] === 0) return res.status(404).json({ message: 'update failed' });
    res.status(200).json();
  } catch (err) {
    next(err);
  }
};

exports.deleteBranch = async (req, res, next) => {
  try {
    const targetId = req.params.id;
    const rows = await Branch.destroy({
      where: { id: targetId },
    });
    if (rows === 0) return res.status(404).json({ message: 'delete failed' });
    res.status(204).json();
  } catch (err) {
    next(err);
  }
};
