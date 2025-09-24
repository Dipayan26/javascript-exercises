const numberChecker = require('./numberChecker')
const numberChecker2 = require('./numberChecker')
const numberChecker3 = require('./numberChecker')
const numberChecker4 = require('./numberChecker')

describe('numberChecker', () => {
  test('returns true when number is 1000', () => {
    expect(numberChecker2(1000)).toEqual(true);
  });
  test('returns true when number is 10', () => {
    expect(numberChecker(10)).toEqual(true);
  });
  test('returns false when number is 9', () => {
    expect(numberChecker3(9)).toEqual(false);
  });
  test('returns false when number is 6', () => {
    expect(numberChecker4(6)).toEqual(false);
  });
});
