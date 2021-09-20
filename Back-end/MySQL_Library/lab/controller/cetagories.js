const { execute } = require('../db/execute');

exports.getAllCetagory = async (req, res, next) => {
  try {
    const result = await execute('SELECT * FROM `cetagories`');
    res.status(200).json({ cetagories: result });
  } catch (err) {
    next(err);
  }
};

exports.getCetagoryById = async (req, res, next) => {
  try {
    const targetId = req.params.id;
    const result = await execute('SELECT * FROM `cetagories` WHERE id = ?', [targetId]);
    if (result.length === 0) {
      res.status(400).json({ message: 'cannot get cetagory with this id' });
    } else {
      res.status(200).json({ cetagory: result[0] });
    }
  } catch (err) {
    next(err);
  }
};

exports.createCetagory = async (req, res, next) => {
  try {
    const { title, type } = req.body;
    if (typeof title !== 'string') {
      res.status(400).json({ message: 'title must be a string' });
    } else if (!['EXPENSE', 'INCOME'].includes(type)) {
      res.status(400).json({ message: 'type must be EXPENSE or INCOME' });
    } else {
      const result = await execute('INSERT INTO `cetagories` (title,type) VALUE (?,?)', [title, type]);
      res.status(200).json({
        cetagory: {
          id: result.insertId,
          title,
          type,
        },
      });
    }
  } catch (err) {
    next(err);
  }
};

exports.updateCetagory = async (req, res, next) => {
  try {
    const { title, type } = req.body;
    const targetId = req.params.id;
    if (typeof title !== 'string') {
      res.status(400).json({ message: 'title must be a string' });
    } else if (!['EXPENSE', 'INCOME'].includes(type)) {
      res.status(400).json({ message: 'type must be EXPENSE or INCOME' });
    } else {
      const result = await execute('UPDATE `cetagories` SET title=?,type=? WHERE id =?', [title, type, targetId]);
      if (result.affectedRows === 0) {
        res.status(400).json({ message: 'cannot update cetagory with this id' });
      } else {
        res.status(200).json();
      }
    }
  } catch (err) {
    next(err);
  }
};

exports.deleteCetagory = async (req, res, next) => {
  try {
    const targetId = req.params.id;
    const result = await execute('DELETE FROM `cetagories` WHERE id = ?', [targetId]);
    if (result.affectedRows === 0) {
      res.status(400).json({ message: 'cannot delete cetagory with this id' });
    } else {
      res.status(204).json();
    }
  } catch (err) {
    next(err);
  }
};
