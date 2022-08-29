const { returnTwo, greeting, add, multiply, divide, subtract } = require('./functions.js')


test('does it return 2', () => {
    expect(returnTwo()).toEqual(2)
})

test('does it say hello with input name', () => {
    expect(greeting('James')).toEqual('Hello, James.')
    expect(greeting('Jill')).toEqual('Hello, Jill.')
})

describe('check if math functions work properly', () => {
    test('do you get sum of input numbers', () => {
        expect(typeof add()).toBe('number')
        expect(typeof add('','')).toBe('string')
        expect(add(1,2)).toEqual(3)
        expect(add(5,9)).toEqual(14)
    })
    test('do you get product of input numbers', () => {
        // expect(multiply(``,``)).toEqual()
        expect(multiply(5,9)).toEqual(45)
    })
    test('do you get quotient of input numbers', () => {
        expect(divide(1,2)).toEqual(0.5)
        expect(divide(10,5)).toEqual(2)
    })
    test('do you get difference of input numbers', () => {
        expect(subtract(1,2)).toEqual(-1)
        expect(subtract(9,5)).toEqual(4)
    })
})
