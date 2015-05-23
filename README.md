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
✓ x64_BigJsSimple: fib(74, & 103, & 154)
⨯ x64_BigJsMath: fib(74, & 103, & 154)
  not ok 22 fib(74): 9.444732965739290427392e+21 === 1304969544928657
    ---
      operator: ok
      expected: true
      actual:   false
      at: Test.<anonymous> (./fibonacci/test/tests.js:16:12)
    ...
  not ok 23 fib(103): 5.070602400912917605986812821504e+30 === 1500520536206896083277
    ---
      operator: ok
      expected: true
      actual:   false
      at: Test.<anonymous> (./fibonacci/test/tests.js:16:12)
    ...
  not ok 24 fib(154): 1.1417981541647679048466287755595961091061972992e+46 === 68330027629092351019822533679447
    ---
      operator: ok
      expected: true
      actual:   false
      at: Test.<anonymous> (./fibonacci/test/tests.js:16:12)
    ...
✓ x64_DecimalJsSimple: fib(74, & 103, & 154)
⨯ x64_DecimalJSMath: fib(74, & 103, & 154)
  not ok 29 fib(103): 1.500520536206896083276e+21 === 1500520536206896083277
    ---
      operator: ok
      expected: true
      actual:   false
      at: Test.<anonymous> (./fibonacci/test/tests.js:16:12)
    ...
# tests 30
# pass  26
⨯ fail  4
npm ERR! Test failed.  See above for more details.
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
