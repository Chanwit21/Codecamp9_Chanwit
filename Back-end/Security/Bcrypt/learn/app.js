// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const { v4: uuidv4 } = require('uuid');
// console.log(uuidv4());

try {
  // const password = '123456';
  // const hashedToCheck = '$2a$12$/wiS6Vivdf0woFzJI9TYwuRIulfMgXOhbXMr1x3FgDnl6HKutUif.';

  const payload = {
    id: 1,
    username: 'bomb',
    email: 'BOM.suthi@gmail.com',
  };

  const SECRETKEY = 'CodEC@Mp9_Cc9Bo@m';
  // const SECRETKEY = 'be8f4e15-7f26-4ded-98d6-0b0f984a44d6';

  // const token = jwt.sign(payload, SECRETKEY, { expiresIn: 60 * 60 * 24 });
  // console.log(token);

  const decodePayload = jwt.verify(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJib21iIiwiZW1haWwiOiJCT00uc3V0aGlAZ21haWwuY29tIiwiaWF0IjoxNjMyNzI4NzcxLCJleHAiOjE2MzI4MTUxNzF9.vZ_8-TyhNbNzxKK5Qqh_f9sFCAmQTax9cEtluSN8xwM',
    SECRETKEY
  );

  console.log(decodePayload);
} catch (err) {
  console.log(err);
}

const run = async () => {
  //   const hashedPassword = await bcrypt.hash(password, 12);
  //   console.log(hashedPassword);
  // const isCorrectPassword = await bcrypt.compare(password, hashedToCheck);
  // console.log(isCorrectPassword);
};

run();
