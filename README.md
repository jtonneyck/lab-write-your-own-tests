# Test Driven Development

Until now we've been using other peoples tests. TDD is about you approaching a problem in little incremental steps. You define those little steps one by one with a test and than you verify it by running it. We our going to write our first tests for the bonus exercise of <a href="https://github.com/ironhack-labs/lab-javascript-functions-and-arrays"> 'javascript functions and arrays' lab </a>. This is a good candidate to practics TDD, because we can divide it up in smaller bits. 

## The Exercise
What is the greatest product of four adjacent numbers? We consider adjacent any 4 numbers that are next to each other in horizontal, vertical or diagonal.

For example, if we have a 5x5 Matrix like:

[ 1,  2, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1,  4, 3, 4, 5]

The greatest product will be the 20x20x20x4 = 32000; For an empty array the function should return 0. For anything that's not an array it should return undefined.

 Write your source code in `BiggestProduct.js` and your test code in `biggestProductSpec.js`. The overal approach is that we can divide the exercise in incremental steps. To calculate the biggest product of 4 adjacent numbers in a 2 dimensional array, we first have to be albe to calculate the product of any 4 numbers. After we want to find the biggest horizontal product, then the biggest vertical one and finally the biggest one diagonally.

1.  Write tests for the edge cases. For an empty array the function should return 0. Write the code that passes it.
2.  Write tests for a helper function that returns the product of 4 numbers that are passed to it. Write the code that passes it.
3. Write tests for a function that returns the biggest product for 1 row. Write the code that passes it.
4. Write tests for a function that returns the biggest product for all the rows. Write the code that passes it.
5. Write tests for a function that returns the biggest product for 1 column. Write the code that passes it.
6. Write tests for a function that retuns the biggest product for all the columns. Write the code that passes it.

### Bonus

7. Write tests for a function that returns the biggest product for the top right 4 diagonally adjacent numbers. Write the code that passes it.
8. Write tests for a function that retuns the biggest product for all the 4 diagonally adjacent numbers. Write the code that passes it.