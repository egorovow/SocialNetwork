import { assert } from 'chai';
import replaceLink from '../public/assets/replaceLink.js';

describe('Тестируем функцию замены ссылок в тексте на html код', function () {
  it('без ссылок', function () {
    assert.equal(replaceLink('Всем привет!'), 'Всем привет!');
  });
  it('с ссылкой в конце поста', function () {
    assert.equal(replaceLink('Привет github.com'), 'Привет <a href="https://github.com">github.com</a>');
  });
  it('с ссылкой в начале поста', function () {
    assert.equal(replaceLink('https://github.com - сайт'), '<a href="https://github.com">github.com</a> - сайт');
  });
  it('с несколькими ссылками в посте', function () {
    assert.equal(replaceLink('https://github.com и яндекс.рф - мои любимые сайты'), '<a href="https://github.com">github.com</a> и <a href="https://яндекс.рф">яндекс.рф</a> - мои любимые сайты');
    assert.equal(replaceLink('burtovoy.org обучающий сайт. ftp://zaicev.net'), '<a href="https://burtovoy.org">burtovoy.org</a> обучающий сайт. <a href="https://zaicev.net">zaicev.net</a>');
    assert.equal(replaceLink('яндекс.рф 1 www.ya.ru 2 http://burtovoy.org 3 test.online 4 яндекс.рф'), '<a href="https://яндекс.рф">яндекс.рф</a> 1 <a href="https://ya.ru">ya.ru</a> 2 <a href="https://burtovoy.org">burtovoy.org</a> 3 <a href="https://test.online">test.online</a> 4 <a href="https://яндекс.рф">яндекс.рф</a>');
  });
});
