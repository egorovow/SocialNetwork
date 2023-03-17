import { assert } from 'chai';
import platformFilter from '../public/assets/platformFilter.js';

describe('Тестируем функцию подсчета количества символов в посте', function () {
  it('без ссылок', function () {
    assert.equal(platformFilter('Всем привет!'), 12);
  });
  it('с ссылкой в конце поста', function () {
    assert.equal(platformFilter('Привет! https://github.com'), 8);
  });
  it('с ссылкой в начале поста', function () {
    assert.equal(platformFilter('https://github.com - сайт'), 7);
  });
  it('с несколькими ссылками в посте', function () {
    assert.equal(platformFilter('https://github.com и яндекс.рф - мои любимые сайты'), 23);
    assert.equal(platformFilter('burtovoy.org обучающий сайт. ftp://zaicev.net'), 17);
    assert.equal(platformFilter('яндекс.рф 1 www.ru 2 ya.ru 3 burtovoy.org 4 www.ru 5 test.online'), 15);
  });
});
