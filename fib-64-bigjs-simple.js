var Big = require('big.js');
Big.DP = 0; // No decimals if == 0 -- otherwise, whole real # of places precision
Big.RM = 1; // 0, 1, 2 or 3 ( ROUND_DOWN, ROUND_HALF_UP, ROUND_HALF_EVEN, ROUND_UP

// Very basic example, attempts to limit memory usage
var fib = exports.fibonacci = function fib(n,arr) {
	var a = Big(1), b = Big(1), c = Big(0);
	for(var i = 1; i < n-1; ++i) {
		c = a.plus(b);
		a = b;
		b = c;
	}
	return b;
};
