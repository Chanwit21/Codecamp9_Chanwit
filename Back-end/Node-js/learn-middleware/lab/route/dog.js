const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res, next) => {
  try {
    const resDogPicture = await axios.get('https://dog.ceo/api/breeds/image/random');
    console.log(`fetch photo : ${resDogPicture.data.status}`);
    res.send(`<image src=${resDogPicture.data.message} alt="dog"/>`);
    // res.send(resDogPicture);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
