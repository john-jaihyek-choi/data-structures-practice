const testArr = new Array(10000).fill('hi');

function testFunction(array) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === 'hi') {
      console.log('found nemo')
    }
  }
}

testFunction(testArr);

// this is a linear complexity function.
// run time of this operation is dependant on the size of the input it receives