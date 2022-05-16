const signChecker = (query) => {
  var sign = 1;
  var numberAppeared = false;
  for (const character of query) {
    if (character >= "0" && character <= "9") {
      numberAppeared = true;
      break;
    }
    if (character == "-" && numberAppeared == false) {
      sign = -1;
      continue;
    }
  }
  return sign;
};

module.exports = { signChecker };
