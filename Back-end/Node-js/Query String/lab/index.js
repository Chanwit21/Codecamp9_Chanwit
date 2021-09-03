const express = require('express');
const app = express();
const sumService = require('./service/sum');
const fs = require('fs/promises');
const { filterCountries } = require('./service/filterCountry');

// Lab1
app.get('/sum', (req, res) => {
  const reqQuery = req.query;
  const sum = sumService.spacilaSum(reqQuery);
  res.status(200).json({ sum: sum });
});

// Lab2
app.get('/countries', async (req, res, next) => {
  try {
    const reqQuery = req.query;
    const data = await fs.readFile('./data/country.json', 'utf-8');
    const { isFilterSuccess, result, message } = filterCountries(reqQuery, JSON.parse(data));
    if (isFilterSuccess) {
      res.status(200).json({ countries: result });
    } else {
      res.status(400).json({ message });
    }
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen(8080, () => console.log('Server is Running on port 8080'));
