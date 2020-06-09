// Given 2 arrays, create a function that lets user know (true/false) whether these two arrays contain any common items

// Example:
// const array1 = [a, b, c, x];
// const array2 = [z, y, i];
// should return false;
// ----------
// const array1 = [a, b, c, x];
// const array2 = [z, y, x];
// should return true;

// Brainstorm:
// Naive solution (quadratric O(n^2)):
    // Loop through the first array (array1) [index i]
    // on each iteration, loop through second array (array2) by its length many times [index j]
        // if array1[i] is equal to array2[j] index
            // return true;

// Pseudocode (quadratric O(n^2)):
// declare a function called containCommonItem with 2 parameters, array1 and array2
    // set a loop that iterates length of array1 many times (array1.length)
        // on each iteration set a loop that iterates length of array2 many times (array2.length)
            // set a condition to check if i'th index at array1 object is strictly equal to j'th index of the array2 object (array1[i] === array2[j])
                // if true, return true;
    // return false;

function containCommonItem (array1, array2) { // time / space complexity
    for(let i = 0; i < array1.length; i++) { 
        for(let j = 0; j < array2.length; j++) {
            if(array1[i] === array2[j]) return true; // O(n) * O(n) = O(n^2) / O(1);
        }
    }
    return false;
}

containCommonItem(['a', 'b', 'c', 'd'], ['z', 'x', 'y', 'o'])
containCommonItem(['a', 'b', 'c', 'd'], ['z', 'x', 'a', 'o'])


// Hashtable == Object solution
// create a loop that iterates the first array and makes an object key with value at each iteration
// set another loop that iterates the second array and on each iteration check if stored Object has a valid key equal to the value of current iteration

// Example: 
// const hashObj = {
        // 'a': null;
        // 'b': null;
        // 'c': null;
// }

// array2 will be looped and check if the hashObj

// Pseudocode:
// declare a function called containCommonItem with 2 parameters, array1 and array2;
    // instantiate a variable called hashObj with an initial value of empty object;
    // loop through the first array (array1) and set value of each iteration to the hashObj as a key
    // loop through the second array (array2)
        // set a condition to check if value of i'th index at each iteration is a valid key in hashObj
            // if true, return true
    // return false;

function containCommonItem (array1, array2) { // time O(n) / space O(n) complexity 
    const hashObj = {}; // O(1) / O(1)
    for(let char of array1) {
        if(char) {
            hashObj[char] = true; // O(n) / O(n)
        }
    }
    for(let char of array2) {
        if(hashObj[char]) return true; // O(n) / O(1);
    }
    return false;
}

containCommonItem(['a', 'b', 'c', 'd'], ['z', 'x', 'y', 'o'])
containCommonItem(['a', 'b', 'c', 'd'], ['z', 'x', 'a', 'o'])