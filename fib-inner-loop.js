var fib = exports.fibonacci = function fibonacci7(n) {
	if (!arr) { var arr = [1,1]; n=n-2; };
	if (n===-1) {return [arr[0]];}
	if (n===0) {return arr;}
	while (n>0) {
		--n;
		arr.push(arr[arr.length-1] + arr[arr.length-2]);
	};
	return arr[arr.length-1];
}
