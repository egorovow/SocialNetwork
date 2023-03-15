import { assert } from 'chai';
import hashTags from '../public/assets/hashTags.js';

describe('Тестируем функцию подсветки хэштегов в строке', function () {
  it('без хэштегов', function () {
    assert.equal(hashTags('Кто еще изучает javascript ?'), 'Кто еще изучает javascript ?');
  });
  it('с хэштегом в конце строки', function () {
    assert.equal(hashTags('Кто еще изучает #javascript ?'), 'Кто еще изучает <a href="/search?tag=javascript">#javascript</a> ?');
  });
  it('с хэштегом в начале строки', function () {
    assert.equal(hashTags('#javascript кто еще изучает?'), '<a href="/search?tag=javascript">#javascript</a> кто еще изучает?');
  });
  it('с несколькими хэштегами в строке', function () {
    assert.equal(hashTags('#javascript кто еще изучает #js ?'), '<a href="/search?tag=javascript">#javascript</a> кто еще изучает <a href="/search?tag=js">#js</a> ?');
  });
});
