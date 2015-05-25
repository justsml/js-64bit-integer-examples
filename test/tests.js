'use strict';
var Big = require('big.js');
Big.DP = 0; // No decimals if == 0 -- otherwise, whole real # of places precision
Big.RM = 0; // 0, 1, 2 or 3 ( ROUND_DOWN, ROUND_HALF_UP, ROUND_HALF_EVEN, ROUND_UP
var test = require('tape').test;
// SEE BOTTOM OF FILE: var verify = [50, 73, 74]; // Set the fib(MAX) to check, see answers below
var conf = require('./config.js');

// Fibonacci Answers From Python, a counting language
var answers  = conf.answers
var testsX86 = conf.testsX86
var testsX64 = conf.testsX64

var doTest = exports.doTest = function(fib, verify, name) {
  test(name.concat(': fib(', verify.join(', & '), ')'), function(t) {
    verify.map(function(tst) {
      var ans = fib(parseInt(tst, 10)),
          title = ' '.concat('fib(', tst, '): ', ans, ' === ', answers[''+tst]);
      if ( typeof ans === 'object' && ans.eq ) {
        t.ok(ans.eq(answers[''+tst]), title);
      } else if ( typeof ans === 'object' && ans.cmp ) {
        t.ok(ans.cmp(answers[''+tst]), title);
      } else {
        t.equal(''+ans, answers[''+tst], title);
      }

    });
    t.end();
  });
}

process.nextTick(function() {
  // 32 bit tests
  var verify = [50, 73, 74];
  var tests = testsX86;
  Object.keys(tests).forEach(function(f) {
    doTest(tests[f] && tests[f].fibonacci, verify, f);
  });
});
process.nextTick(function() {
  // 64 bit tests
  var verify = [74, 103, 154]
  var tests = testsX64;
  Object.keys(tests).forEach(function(f) {
    doTest(tests[f] && tests[f].fibonacci, verify, f);
  });
});