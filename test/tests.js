'use strict';
var Big = require('big.js');
Big.DP = 0; // No decimals if == 0 -- otherwise, whole real # of places precision
Big.RM = 1; // 0, 1, 2 or 3 ( ROUND_DOWN, ROUND_HALF_UP, ROUND_HALF_EVEN, ROUND_UP
var test = require('tape').test;
// SEE BOTTOM OF FILE: var verify = [50, 73, 74]; // Set the fib(MAX) to check, see answers below


var answers = {
  '103': '1500520536206896083277',
  '100': '354224848179261915075',
  '97':  '83621143489848422977',
  '92':  '7540113804746346429',
  '87':  '679891637638612258',
  '74':  '1304969544928657',
  '73':  '806515533049393', // 32-bit integer limit
  '50':  '12586269025',
  '127': '155576970220531065681649693',
  '154': '68330027629092351019822533679447',
  '198': '107168651819712326877926895128666735145224',
  '690': '711191848662898739848693775198753609852446309655832028330454660598682611672193522149774111717714260979387118204994178871696251636420290229056920',
  '958': '72556171273449457834951363966480123579074308201883345226595523694539010959098708804494565364650643087041102422529107753210418996008519495018074582571758187359415023021847203279568114554460593757918079'
};

// Exported for benchmarks
var testsX86 = exports.testsX86 = {// here are the functions to test
  x86_ArrayPush:       require('../fib-array-push.js'),
  x86_Math:            require('../fib-math.js'),
  x86_Dave:            require('../fib-dave.js'),
  x86_Dan:             require('../fib-dan.js'),
  // ^^ 32 bit functions above ^^^
};
// Exported for benchmarks
var testsX64 = exports.testsX64 = {// here are BigNums to test
  x64_BigJsSimple:      require('../fib-64-bigjs-simple.js'),
  x64_BigJsMath:     require('../fib-64-bigjs-math.js'),
  x64_DecimalJsSimple:  require('../fib-64-decimaljs-simple.js'),
  x64_DecimalJSMath: require('../fib-64-decimaljs-math.js')
};

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