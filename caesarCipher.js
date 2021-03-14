const caesarCipher = (str, shift = 0) => {
  // make string uniform in case there are uppercase characters
  let lowerCaseStr = str.toLowerCase();
  const alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let result = '';

  for (let i = 0; i < lowerCaseStr.length; i++) {
    // get the current character value at ith position
    let currChar = lowerCaseStr[i];
    // if current character is a space, add to result and continue with loop and break out of if statement
    if (currChar === ' ') {
      result += currChar;
      continue;
    }
    // get the current index
    let currIdx = alphabetArr.indexOf(currChar);

    // add shift to currIdx for the shifted index
    let shiftIdx = currIdx + shift;

    // check for large shift values
    if (shiftIdx > 25) shiftIdx = (shiftIdx % 26) - 26;
    if (shiftIdx < 0) shiftIdx = (shiftIdx % 26) + 26;

    // check for characters that are not letters or whitespaces
    if (currIdx === -1) return '';

    // wrap around for large shift inputs
    if (shiftIdx > 25) shiftIdx -= 26;
    if (shiftIdx < 0) shiftIdx += 26;

    // check for uppercase characters
    if (str[i] === str[i].toUpperCase())
      // add character from alphabetArr to result and make uppercase
      result += alphabetArr[shiftIdx].toUpperCase();
    // if current value passes above checks, add to result string
    else result += alphabetArr[shiftIdx];
  }
  return result;
};

module.exports = caesarCipher;
