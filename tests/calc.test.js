import { assert } from 'chai';
import calculator from '../public/assets/calc.js';

describe('Функция калькулятор', function () {
  it('складывает 2 числа', function () {
    const expectedResult = 8;
    const result = calculator(3, 5);
    assert.equal(expectedResult, result);
  });
});
