// Very basic example, attempts to limit memory usage
var fib = exports.fibonacci = function fib(n,arr) {
	var a = 1, b = 1, c = 0;
	for(var i = 1; i < n-1; ++i) {
		c = a + b;
		a = b;
		b = c;
	}
	return b;
};
