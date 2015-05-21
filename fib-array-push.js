var fib = exports.fibonacci = function fibonacci(n) {
 var i, fibs = [0, 1];
 for (i = 0; i++ < n;) {
	fibs.push(fibs[0] + fibs[1]);
	fibs.shift();
 }
 return fibs[0];
}
