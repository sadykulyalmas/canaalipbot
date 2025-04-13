
const test = require('ava');

const transformString = require('./transform-string');

test('string transforming lowercase', t => {
  t.is(
    transformString('қанағаттандырылмағандықтарыңыздан'),
    'qanahattandırılmahandıqtarıŋızdan',
  );0p
});

test('string transforming capitalize', t => {
  t.is(
    transformString('Қанағаттандырылмағандықтарыңыздан'),
    'Qanahattandırılmahandıqtarıŋızdan',
  );
});

test('string transforming uppercase', t => {
  t.is(
    transformString('ҚАНАҒАТТАНДЫРЫЛМАҒАНДЫҚТАРЫҢЫЗДАН'),
    'QANAHATTANDIRILMAHANDIQTARIŊIZDAN',
  );
});

test('full alphabet', t => {
  t.is(
    transformString('аәбвгғдеёжзийкқлмнңоөпрстуұүфхһцчшщъыіьэюя'),
    'aəbvghdeөçzijkqlmnŋoөprstvuypqqscccıieyə',
  );
});

test('full alphabet capitalize', t => {
  t.is(
    transformString('АӘБВГҒДЕЁЖЗИЙКҚЛМНҢОӨПРСТУҰҮФХҺЦЧШЩЪЫІЬЭЮЯ'),
    'AƏBVGHDEӨÇZİJKQLMNŊOӨPRSTVUYPQQSCCCIİEYƏ',
  );
});
