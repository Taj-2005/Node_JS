const { format } = require('date-fns');

const now = new Date();
const timestamp = format(now, "dd-MM-yyyy HH:mm:ss");

const info = (message) => {
  console.log(`[${timestamp}] ${message}`);
};
const warn = (message) => {
  console.log(`[${timestamp}] ${message}`);
}
const error = (message) => {
  console.log(`[${timestamp}] ${message}`);
}
module.exports = {info, warn, error};