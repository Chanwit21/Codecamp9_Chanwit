const errorMidleWare = (err, req, res, next) => {
  res.status(500).json({ message: err.message });
};

module.exports = errorMidleWare;
