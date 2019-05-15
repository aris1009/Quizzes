Write a function that takes a number and divides that number among the elements of a given array such that it brings the difference between the elements to be as small as possible.

1. An element should never decrease in value to balance out the rest of the array.
2. The output should have non-whole numbers if it produces the least difference between the elements of the array.


[2, 3, 0].balance(5)    // => Expected output: [3.3, 3.3, 3.3]
[2, 3, 0].balance(1)    // => Expected output: [2, 3, 1]
[5, 7].balance(4)       // => Expected output: [8, 8]
[2, 0, 0, 0].balance(2) // => Expected output: [2, 0.66, 0.66, 0.66]