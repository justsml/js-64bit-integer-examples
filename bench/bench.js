'use strict';
var Tests = require('../test/config.js');
var answers = Tests.answers;
// add tests
function getBenchSuite() {
	var Benchmark = require('benchmark');
	var suite = new Benchmark.Suite();
	suite
	.on('cycle', function(event) {
		console.log(String(event.target));
	})
	.on('complete', function() {
		console.log('Fastest ', this.filter('fastest').pluck('name'));
	});
	return suite;
}

function runTestsAsBench(lbl, tests, verify) {
	console.log('\nBeginning', lbl, 'Benchmarks ( test values ', verify.join(', '), ') ...');

	var suite = getBenchSuite();
	Object.keys(tests).forEach(function(testName) {
		suite.add(lbl.concat(': ', testName), function testVals() {
			var fib = tests[testName] && tests[testName].fibonacci;
			var ans = verify.map(fib);
			// MUST: ans === [ 12586269025, 806515533049393, 1304969544928657 ]
		});
	});
	return suite.run({ 'async': false });
}

runTestsAsBench('32bit', Tests.testsX86, [50, 73, 74]);
runTestsAsBench('64bit', Tests.testsX64, [74, 103, 154]);

