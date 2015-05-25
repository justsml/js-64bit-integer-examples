[![Build Status](https://travis-ci.org/justsml/js-64bit-integer-examples.svg?branch=master)](https://travis-ci.org/justsml/js-64bit-integer-examples)

# Example of BigNumber in JavaScript


#### Included:
- Variety of fibonacci-based examples
- Greater than 64-bit, 8-byte integer demonstration
- Tests
- Benchmarks

## Install:

```sh
npm install
```

## Tests:

```sh
npm test

# Current results:
> faucet

✓ x86_ArrayPush: fib(50, & 73, & 74)
✓ x86_Math: fib(50, & 73, & 74)
✓ x86_Dan: fib(50, & 73, & 74)
✓ x86_InnerLoop: fib(50, & 73, & 74)
✓ x86_RecursionInner: fib(50, & 73, & 74)
✓ x86_RecursionLinear: fib(50, & 73, & 74)
✓ x64_BigJsSimple: fib(74, & 154)
✓ x64_DecimalJsSimple: fib(74, & 154)
✓ x64_DecimalJSMath: fib(74, & 154)
# tests 24
# pass  24
✓ ok

```

## Benchmark:

```sh
npm run bench
```

```
Beginning 32bit Benchmarks ( test values  50, 73, 74 ) ...
32bit: x86_ArrayPush x 612,639 ops/sec ±0.61% (97 runs sampled)
32bit: x86_Math x 1,471,014 ops/sec ±0.27% (100 runs sampled)
32bit: x86_Dan x 1,856,235 ops/sec ±0.54% (99 runs sampled)
32bit: x86_InnerLoop x 679,621 ops/sec ±0.18% (99 runs sampled)
32bit: x86_RecursionInner x 310,568 ops/sec ±0.25% (96 runs sampled)
32bit: x86_RecursionLinear x 474,421 ops/sec ±0.46% (94 runs sampled)
Fastest  [ '32bit: x86_Dan' ]

Beginning 64bit Benchmarks ( test values  74, 103, 154 ) ...
64bit: x64_BigJsSimple x 6,553 ops/sec ±0.25% (100 runs sampled)
64bit: x64_BigJsMath x 9,703 ops/sec ±0.18% (99 runs sampled)
64bit: x64_DecimalJsSimple x 6,552 ops/sec ±0.22% (99 runs sampled)
64bit: x64_DecimalJSMath x 43.73 ops/sec ±1.77% (59 runs sampled)
Fastest  [ '64bit: x64_BigJsMath' ]
```
