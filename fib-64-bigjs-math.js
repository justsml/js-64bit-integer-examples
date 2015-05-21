var Big = require('big.js');
Big.DP = 0
Big.RM = 3

exports.fibonacci = function _fibonacci(n) {
	var sq5 = Big(5).sqrt();
	return Big(sq5.plus(1).div(2).pow(Math.abs(n)).div(sq5)).round().times(n < 0 && n % 2 ? -1 : 1);
}
