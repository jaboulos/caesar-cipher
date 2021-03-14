const caesarCipher = require('./caesarCipher');

describe('caesarCipher', () => {
  it('returns an empty string if given an empty string.', () => {
    expect(caesarCipher('')).toEqual('');
    expect(caesarCipher('', 1)).toEqual('');
  });
  it('returns input string if no shift value is given.', () => {
    expect(caeserCipher('ABC DEF')).toEqual('ABC DEF');
  });
  it('returns input string if shift value is 0.', () => {
    expect(caeserCipher('ABC DEF', 0)).toEqual('ABC DEF');
  });
  it('shifts the string right if shift input is positive.', () => {
    expect(caeserCipher('ABC DEF', 1)).toEqual('BCD EFG');
  });
  it('shifts the string left if shift input is negative.', () => {
    expect(caeserCipher('ABC DEF', -1)).toEqual('ZAB CDE');
  });
  it('shifts the string to the right correctly if shift value is greater than 26.', () => {
    expect(caeserCipher('ABC DEF', 27)).toEqual('BCD, EFG');
  });
  it('shifts correctly with all lowercase string characters and a positive shift input.', () => {
    expect(caesarCipher('abc def', 1)).toEqual('bcd efg');
  });
  it('shifts correctly with all lowercase string characters and a negative shift input.', () => {
    expect(caesarCipher('abc def', -1)).toEqual('zab cde');
  });
  it('shifts correctly when input string has both lower and uppercase characters.', () => {
    expect(caeserCipher('aBc DeF', 1)).toEqual('bCd EfG');
  });
  it(
    'returns an empty string when input string contains characters that are not letters or whitespaces.'
  );
  expect(caesarCipher('A&C D$F')).toEqual('');
});
