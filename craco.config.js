const path = require('path');

/**
 * @param {string} route
 */
const go = (route) => path.resolve(__dirname, route);

const aliases = {
  '@/*': './src/*',
  '@Components/*': './src/components/*',
  '@Containers/*': './src/containers/*',
  '@Services/*': './src/services/*',
  '@Store/*': './src/store/*',
};

module.exports = {
  webpack: {
    alias: Object.entries(aliases).reduce((acc, [key, route]) => {
      acc[key] = path.resolve(__dirname, route);
      return acc;
    }, {}),
  },
};