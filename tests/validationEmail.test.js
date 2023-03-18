import { assert } from 'chai';
import validationEmail from '../public/assets/validationEmail.js';

describe('Тестируем функцию для валидации email', function () {
  it('с корректным email', function () {
    assert.equal(validationEmail('test@mail.ru'), true);
    assert.equal(validationEmail('aa_ivanov@yandex.ru'), true);
    assert.equal(validationEmail('1@outlook.com'), true);
    assert.equal(validationEmail('IVANOV_II@test.online'), true);
  });
  it('с некорректным email', function () {
    assert.equal(validationEmail('@ya.ru'), false);
    assert.equal(validationEmail('test@outlook'), false);
    assert.equal(validationEmail('test_mail.com'), false);
    assert.equal(validationEmail(' @bk.xyz'), false);
    assert.equal(validationEmail('te*st@mail.online'), false);
    assert.equal(validationEmail('!test@ya.ru'), false);
    assert.equal(validationEmail('[test]@outlook.online'), false);
  });
});
