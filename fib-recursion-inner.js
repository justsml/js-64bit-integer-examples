var fib = exports.fibonacci = function fibonacci6(n) {
	if (!arr) { var arr = [1,1]; n=n-2; };
	if (n===-1) {return [arr[0]];}
	if (n===0) {return arr;}
	var proc = function() {
		--n;
		arr.push(arr[arr.length-1] + arr[arr.length-2]);
		return (n===0 ? arr : proc());
	};
	var ans = proc();
	return ans[ans.length-1];
}
