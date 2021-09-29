const { User } = require('../models');
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');
const { isStrongPassword, isEmail } = require('validator');
const jwt = require('jsonwebtoken');

const SECRETKEY = process.env.SECRET_KEY;

exports.authenticate = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization?.startsWith('Bearer')) {
      return res.status(401).json({ message: 'you are unauthorize' });
    }

    const token = authorization.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'you are unauthorize' });
    }

    const decode = jwt.verify(token, SECRETKEY);

    const user = await User.findOne({ where: { id: decode.id } });

    if (!user) {
      return res.status(401).json({ message: 'you are unauthorize' });
    }

    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

exports.logIn = async (req, res, next) => {
  try {
    const { usernameOrEmail, password } = req.body;
    const user = await User.findOne({
      where: { [Op.or]: [{ username: usernameOrEmail }, { email: usernameOrEmail }] },
    });

    if (user) {
      const isCorrectPassword = await bcrypt.compare(password, user.password);
      if (isCorrectPassword) {
        const payload = {
          id: user.id,
          email: user.email,
          username: user.username,
        };
        const token = jwt.sign(payload, SECRETKEY, { expiresIn: 30 * 24 * 60 * 60 });
        res.status(200).json({ message: 'Success login', token });
      } else {
        res.status(400).json({ message: 'username or password is incorrect' });
      }
    } else {
      res.status(400).json({ message: 'username or password is incorrect' });
    }
  } catch (err) {
    next(err);
  }
};

exports.register = async (req, res, next) => {
  try {
    const { username, password, email, confirmPassword } = req.body;
    if (!username || !password || !email) {
      res.status(400).json({ message: 'email username and password is require' });
    }

    //Check password match confirm password
    if (password !== confirmPassword) {
      res.status(400).json({ message: 'password and confirm password did not match' });
    }

    const userByUsername = await User.findOne({
      where: {
        username: username,
      },
    });

    const userByEmail = await User.findOne({
      where: {
        email: email,
      },
    });

    if (userByUsername) {
      res.status(400).json({ message: 'username has alredy registed' });
    } else if (userByEmail) {
      res.status(400).json({ message: 'email has alredy registed' });
    } else {
      if (!isEmail(email)) {
        res.status(400).json({ message: 'Email is invalid' });
      } else if (
        !isStrongPassword(password, { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })
      ) {
        res.status(400).json({ message: 'Password is week' });
      } else {
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await User.create({
          username: username,
          password: hashedPassword,
          email: email,
        });
        res.status(200).json({ user });
      }
    }
  } catch (err) {
    next(err);
  }
};
