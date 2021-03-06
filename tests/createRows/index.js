/* eslint-disable no-multi-assign,prefer-const */
const restartCounters = () => {
  global.__COUNTERS__ = Object.keys(global.__COUNTERS__)
    .reduce((prev, curr) => ({ ...prev, [curr]: 0 }), {});
};

const createPost = require('./createPost');
const createPostCategory = require('./createPostCategory');

module.exports = {
  restartCounters,
  createPost,
  createPostCategory,
};
