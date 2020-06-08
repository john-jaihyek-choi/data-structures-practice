// Log all pairs of array
const testArr = ['a','b','c','d','e'];

function testfunction(arr) {
  for(let i = 0; i < arr.length; i++) { // O(n)
    for(let j = 0; j < arr.length; j++) { // O(n) * O(n)
      console.log(arr[i] + arr[j])
    }
  }
}

testfunction(testArr);


// this is an example of quadratic complexity
// inner loop's iteration is dependant to its outer loop's input size
