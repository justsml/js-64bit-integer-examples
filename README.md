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
32bit: x86_ArrayPush x 613,676 ops/sec ±0.46% (100 runs sampled)
32bit: x86_Math x 1,400,608 ops/sec ±0.21% (100 runs sampled)
32bit: x86_Dan x 1,832,173 ops/sec ±0.31% (101 runs sampled)
32bit: x86_InnerLoop x 668,364 ops/sec ±0.24% (100 runs sampled)
32bit: x86_RecursionInner x 260,873 ops/sec ±17.01% (84 runs sampled)
32bit: x86_RecursionLinear x 469,110 ops/sec ±0.34% (100 runs sampled)
Fastest  [ '32bit: x86_Dan' ]

Beginning 64bit Benchmarks ( test values  74, 103, 154 ) ...
64bit: x64_BigJsSimple x 6,352 ops/sec ±0.22% (100 runs sampled)
64bit: x64_DecimalJsSimple x 6,368 ops/sec ±0.18% (99 runs sampled)
64bit: x64_DecimalJSMath x 44.61 ops/sec ±1.36% (60 runs sampled)
Fastest  [ '64bit: x64_DecimalJsSimple', '64bit: x64_BigJsSimple' ]
```
