const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var params = 123;
    expect(isRealString(params)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var params = '    ';
    expect(isRealString(params)).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var params = '   D';
    expect(isRealString(params)).toBe(true);
  });
});
