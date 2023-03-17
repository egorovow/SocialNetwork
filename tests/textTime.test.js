import { assert } from 'chai';
import textTime from '../public/assets/textTime.js';

describe('Тестируем функцию для преобразования числа во время', function () {
  it('показывается время в минутах, когда этот пост отправлен', function () {
    assert.equal('1 минуту назад', textTime(1));
    assert.equal('5 минут назад', textTime(5));
    assert.equal('59 минут назад', textTime(59));
  });
  it('показывается время в часах, когда этот пост отправлен', function () {
    assert.equal('1 час назад', textTime(61));
    assert.equal('5 часов назад', textTime(300));
    assert.equal('23 часа назад', textTime(1380));
  });
  it('показывается время в днях, когда этот пост отправлен', function () {
    assert.equal('5 дней назад', textTime(7200));
    assert.equal('365 дней назад', textTime(525600));
  });
  it('показывается время в годах, когда этот пост отправлен', function () {
    assert.equal('более года назад', textTime(527040));
  });
});
