// npm packages
const path = require('path');

const getScriptName = filename =>
  path.basename(filename, path.extname(filename));

module.exports = {
  getScriptName,
};
