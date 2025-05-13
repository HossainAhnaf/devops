require('dotenv').config();

let PORT = process.env.PORT;
let JWT_SECRET = process.env.JWT_SECRET;
let PUBLIC_URL = process.env.PUBLIC_URL

module.exports = {
  PORT,
  JWT_SECRET,
  PUBLIC_URL
};
