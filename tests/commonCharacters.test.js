const commonCharacters = require('../src/commonCharacters');

/* eslint-disable no-undef */
describe('commonCharacters', () => {
  it('should return the common characters between two strings', () => {
    const chars = commonCharacters.commonCharacters('acexivou', 'aegihobu');

    expect(chars).toBe('aeiou');
  });

  it('should ignore whitespace', () => {
    const chars = commonCharacters.commonCharacters('acex ivou', 'aegi hobu');

    expect(chars).toBe('aeiou');
  });
});
