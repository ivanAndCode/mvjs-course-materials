import {deepEqual} from 'assert';
import myFunction from '../invert.js';

describe('invert() function should work for', () => {
  it('an empty array', () => {
    //aaa
    //arrange
    const expectedArray = []
    const myArray = []

    //act
    const result = myFunction(myArray)

    //assert
    deepEqual(result, expectedArray)
  })

  it('wan array with one number', () => {
    const myArray = [1]
    const expected = [-1]

    const result = myFunction(myArray)

    deepEqual(result, expected)
  })

  it('array with many numbers', () => {
    const myArray = [1, -2, 3, -4, 5]
    const expected = [-1, 2, -3, 4, -5]

    const result = myFunction(myArray)

    deepEqual(result, expected)
  })
})