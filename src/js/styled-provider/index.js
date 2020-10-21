if (process.env.GROMMET_DRIVER === 'emotion') {
  // eslint-disable-next-line global-require
  module.exports = require('./emotion.js');
} else {
  // eslint-disable-next-line global-require
  module.exports = require('./styled-components.js');
}
