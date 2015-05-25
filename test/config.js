
// Fibonacci Answers From Python, a counting language
var answers = exports.answers = {
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
  x86_ArrayPush:        require('../fib-array-push.js'),
  x86_Math:             require('../fib-math.js'),
  // x86_Dave:             require('../fib-dave.js'),
  x86_Dan:              require('../fib-dan.js'),
  x86_InnerLoop:        require('../fib-inner-loop.js'),
  x86_RecursionInner:   require('../fib-recursion-inner.js'),
  x86_RecursionLinear:  require('../fib-recursion-linear.js')
  // ^^ 32 bit functions above ^^^
};
// Exported for benchmarks
var testsX64 = exports.testsX64 = {// here are BigNums to test
  x64_BigJsSimple:      require('../fib-64-bigjs-simple.js'),
  // WHY DOESN'T THIS WORK?
  // x64_BigJsMath:     require('../fib-64-bigjs-math.js'),
  x64_DecimalJsSimple:  require('../fib-64-decimaljs-simple.js'),
  x64_DecimalJSMath: require('../fib-64-decimaljs-math.js')
};
