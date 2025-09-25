const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Dipayan', () => {
    expect(values.firstName).toEqual('Dipayan');
  });
  test.skip('lastName is Sarkar', () => {
    expect(values.lastName).toEqual('Sarkar');
  });
  test.skip('thisYear is 1965', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test.skip('birthYear is 1947', () => {
    expect(values.birthYear).toEqual(1997);
  });
  test.skip('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Carlos Stevenson and I am 18 years old.');
  });
});

describe('step 3', () => {
  test.skip('fullName is Carlos Stevenson', () => {
    expect(values.fullName).toEqual('Carlos Stevenson');
  });
  test.skip('age is 18', () => {
    expect(values.age).toEqual(18);
  });
});
