var Decimal, SQ5;
Decimal = require('decimal.js');
Decimal.config({
  precision: 200,
  rounding: 4,
  errors: true
});
SQ5 = new Decimal(5).sqrt(); // useful ass constant, I <3 math

exports.fibonacci = function _fibonacci(n) {
	return new Decimal(SQ5.plus(1).div(2).pow(Math.abs(n)).div(SQ5))
		.round()// round up here ^^^^
		.times(n < 0 && n % 2 ? -1 : 1);
}

