const signChecker = (query) => {
  var sign;
  if (query[0] === "-") {
    sign = -1;
  } else {
    sign = 1;
  }
  return sign;
};

module.exports = { signChecker };
