import { assert } from 'chai';
import replaceLink from '../public/assets/replaceLink.js';

describe('Тестируем функцию замены ссылок в тексте на html код', function () {
  it('без ссылок', function () {
    assert.equal(replaceLink('Всем привет!'), 'Всем привет!');
  });
  it('с ссылкой в конце поста', function () {
    assert.equal(replaceLink('Привет github.com'), '<a href="https://github.com">github.com</a>');
  });
  it('с ссылкой в начале поста', function () {
    assert.equal(replaceLink('https://github.com - сайт'), '<a href="https://github.com">github.com</a>');
  });
  it('с несколькими ссылками в посте', function () {
    assert.equal(replaceLink('https://github.com и яндекс.рф - мои любимые сайты'), 23);
    assert.equal(replaceLink('burtovoy.org обучающий сайт. ftp://zaicev.net'), 17);
    assert.equal(replaceLink('яндекс.рф 1 www.ru 2 ya.ru 3 burtovoy.org 4 www.ru 5 test.online'), 15);
  });
});
