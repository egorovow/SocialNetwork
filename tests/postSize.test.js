import { assert } from 'chai';
import postSize from '../public/assets/postSize.js';

describe('Функция для подсчета количества символов в посте', function () {
  it('функция принимает строку и возвращает количество символов без учета ссылок', function () {
    assert.equal(postSize('Всем привет!'), 12);
    assert.equal(postSize('Привет! https://github.com'), 8);
    assert.equal(postSize('https://github.com - сайт'), 7);
    assert.equal(postSize('https://github.com и яндекс.рф - мои любимые сайты'), 23);
    assert.equal(postSize('burtovoy.org обучающий сайт. ftp://zaicev.net'), 17);
    assert.equal(postSize('яндекс.рф 1 www.ru 2 ya.ru 3 burtovoy.org 4 www.ru 5 test.online'), 15);
  });
});
