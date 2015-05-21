'use strict';
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();

var limit = 800;

// add tests
suite
// .add('fibonacci #1', function() { require('').fibonacci(limit); })
// .add('fibonacci #2', function() { require('').fibonacci(limit); })
// .add('fibonacci #3', function() { require('').fibonacci(limit); })
// .add('fibonacci #4', function() { require('').fibonacci(limit); })
.add('fibonacci #5', function() { require('').fibonacci(limit); })
// .add('fibonacci #6', function() { require('').fibonacci(limit); })
// .add('fibonacci #7', function() { require('').fibonacci(limit); })
.add('fibonacci #8', function() { require('').fibonacci(limit); })
.add('fib-dan-bigint.js', function() { require('../fib-dan-bigint.js').fibonacci(limit); })
.add('fib-array-push.js', function() { require('../fib-array-push.js').fibonacci(limit); })
.on('cycle', function(event) {
	console.log(String(event.target));
})
.on('complete', function() {
	console.log('Fastest is ' + this.filter('fastest').pluck('name'));
	this.forEach(function(stats) {
		console.log('Name: ', stats.name);
		console.log('	HZ: ', stats.hz);
		// console.log('	Stats: ', stats.stats);
	})
	// console.log(this);
})
.run({ 'async': true });




// like #1 but + caching and exp instead of pow
function fibonacci3(n) {
	var sqrt5 = Math.sqrt(5),
		lnphi = Math.log(1 + sqrt5) - Math.LN2;
 return (function(n) {
 	return n <= 2 ? n && 1 : Math.round(Math.exp(lnphi * n) / sqrt5);
  })(n);
}


// linear recursion

function fibonacci4(n) {
	function rek(n, a, b) {
		return n <= 1 ? a + b : rek(n - 1, a + b, a);
	}
	return n <= 2 ? n && 1 : rek(n - 1, 1, 0);
}

function fibonacci5(n) {
	var a = 1, b = 1, c = 0;
	for(var i = 1; i < n-2; ++i) {
		c = a + b;
		a = b;
		b = c;
	}
	return b;
}

function fibonacci6(n) {
  if (!arr) { var arr = [1,1]; n=n-2; };
  if (n===-1) {return [arr[0]];}
  if (n===0) {return arr;}
  var proc = function() {
    --n;
    arr.push(arr[arr.length-1] + arr[arr.length-2]);
    return (n===0 ? arr : proc());
  };
  return proc();
}

function fibonacci7(n) {
  if (!arr) { var arr = [1,1]; n=n-2; };
  if (n===-1) {return [arr[0]];}
  if (n===0) {return arr;}
  while (n>0) {
    --n;
    arr.push(arr[arr.length-1] + arr[arr.length-2]);
  };
  return arr;
}

function fibonacci8(n,arr) {
  if (!arr) { arr = [1,1]; n=n-2; };
  if (n===-1) {return [arr[0]];}
  if (n===0 || n >= limit) {return arr;}
  arr.push(arr[arr.length-1] + arr[arr.length-2]);
  setTimeout(function() {
    return fibonacci8(n-1,arr);
  }, 0);
}

// function fibonacci9(n,arr) {
//   if (!arr) { arr = [1,1]; n=n-2; };
//   if (n===-1) {return [arr[0]];}
//   if (n===0 || n >= limit) {return arr;}
//   arr.push(arr[arr.length-1] + arr[arr.length-2]);
//   process.nextTick(function() {
//     return fibonacci9(n-1,arr);
//   });
// }

// function fibonacci10(n,arr) {
//   if (!arr) { arr = [1,1]; n=n-2; };
//   if (n===-1) {return [arr[0]];}
//   if (n===0 || n >= limit) {return arr;}
//   arr.push(arr[arr.length-1] + arr[arr.length-2]);
//   setImmediate(function() {
//     return fibonacci10(n-1,arr);
//   });
// }