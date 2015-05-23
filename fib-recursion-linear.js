var fib = exports.fibonacci = function fibonacci4(n) {
	function rek(n, a, b) {
		return n <= 1 ? a + b : rek(n - 1, a + b, a);
	}
	return n <= 2 ? n && 1 : rek(n - 1, 1, 0);
}
