import HelloWorld from '../src/HelloWorld'

describe('Hello World', () => {
  it('should return \'Hello World\'', () => {
    const actual = HelloWorld();
    const expected = 'Hello World!'
    expect(actual).toEqual(expected);
  })
})