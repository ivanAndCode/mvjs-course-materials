import { equal, deepEqual } from 'assert';
import greetPerson from '../greet.js';
import myFunction from '../greet.js';

describe('greetPerson() function should', function () {
    it('give you correct name back', function () {
        const expectedName = 'Hello from New name!'
        const result = greetPerson('New name')
        equal(result, expectedName);
    });
});
//
//
// it('works for an empty array', () => {
//     //aaa
//     //arrange
//     const expectedArray = []
//     const myArray = []
//
//     //act
//     const result = myFunction(myArray)
//
//     //assert
//     deepEqual(result, expectedArray)
// })
//
// it('works for an array with one number', () => {
//     const myArray = [1]
//     const expected = [-1]
//
//     const result = myFunction(myArray)
//
//     deepEqual(result, expected)
// })
//
// it('works for an array with many numbers', () => {
//     const myArray = [1, -2, 3, -4, 5]
//     const expected = [-1, 2,-3, 4, -5]
//
//     const result = myFunction(myArray)
//
//     deepEqual(result, expected)
// })