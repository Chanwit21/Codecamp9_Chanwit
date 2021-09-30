module.exports = (err, req, res, next) => {
  console.log(JSON.stringify(err, null, 2));
  //   console.log(err);

  let code;
  let message;

  if (err.name === 'SequelizeValidationError') {
    code = 400;
  }

  if (err.name === 'SequelizeUniqueConstraintError') {
    let type = '';
    if (err.errors[0].message === 'users.username must be unique') {
      code = 400;
      message = 'Username has alredy in use.';
      //   return res.status(400).json({ message: 'Username has alredy in use.', type: 'Username has alredy in use.' });
    }
  }

  //JsonWebTokenError
  if (err.name === 'JsonWebTokenError') {
    code = 401;
    // return res.status(401).json({ message: err.message });
  }

  //TokenExpiresError
  if (err.name === 'TokenExpiredError') {
    code = 401;
    // return res.status(401).json({ message: err.message });
  }

  res.status(code || err.code || 500).json({ message: message || err.message });
};
