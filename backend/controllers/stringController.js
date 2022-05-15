const expressAsyncHandler = require("express-async-handler");
const { signChecker } = require("../helpers/stringHelpers");

const convertStringToInteger = expressAsyncHandler((req, res) => {
  const { query } = req.body;
  const sign = signChecker(query);
  var numberAppeared = false;
  var spaceAppearedAfterNumber = false;
  const temporaryCharacterArray = [];
  for (const character of query) {
    if (character == "0" && numberAppeared == false) continue;

    if (character === " " && numberAppeared == true) {
      spaceAppearedAfterNumber = true;
    }

    if (
      character >= "0" &&
      character <= "9" &&
      spaceAppearedAfterNumber == false
    ) {
      numberAppeared = true;
      temporaryCharacterArray.push(character);
      continue;
    }
  }
  const integerNumber = sign * +temporaryCharacterArray.join("");

  res.json({ result: integerNumber });
});

module.exports = { convertStringToInteger };
