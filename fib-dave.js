var fib = exports.fibonacci = function fib(n,arr,limit) {
  if (!arr) { arr = [1,1]; limit = n; n=n-2; };
  if (n==-1) return [arr[0]];
  if (n==0 || n >= limit) return arr[arr.length-1];
  arr.push(arr[arr.length-1] + arr[arr.length-2]);
  return fib(n-1, arr);
};
