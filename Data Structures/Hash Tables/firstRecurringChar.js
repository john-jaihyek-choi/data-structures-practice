//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

// Brainstorm:
// Naive solution: Quadratic time complexity (O(n^2));
    // keep track of temp value for the value at index
    // keep track of smallestDistance
    // simply loop nest two loops to check for all possible occurances
    // and set a condition for two things:
        // if i'th value at arr and j'th value at arr is equal
            // AND
        // if tempDist is smaller than smallestDistance;


// Pseudocode (Naive Solution):
// declare a function called firstRecurrence with a single parameter, arr
    // set a loop that iterates length of arr many times with index as i;
        // set another loop that iterates length of arr many times starting from i plus one index
            // set a condition to check if value of i'th index of arr is equal to value of j'th index of arr,
                // if true, return value of arr at i'th index;
    // return undefined if nothing is returned from the above function

function firstRecurrence(arr) { // Time / Space Complexity
    if(!arr) return undefined;
    let temp = 0;
    let smallestDistance = arr.length;
    for(let i = 0; i < arr.length; i++) {
        let tempDist = 0;
        for(let j = i+1; j < arr.length; j++) {
            tempDist++;
            if(arr[i] === arr[j] && tempDist < smallestDistance){ // O(n^2) / O(1);
                smallestDistance = tempDist;
                temp = arr[i];
            }
        }
    }
    return temp;
}

// Brainstorm:
// Second approach: Linear time complexity
    // Some possible approach:
        // hashTables: tradeoff between space and time;
            // loop through the arr initially and create a key value pair for all values
                // during loop, if we find existing value,
                    // return the key of that value

function firstRecurrence(arr) { // Time / Space Complexity
    const hashObj = {};
    for(let i = 0; i < arr.length; i++) { // O(n) / O(n);
        console.log(i, arr[i]);
        if(hashObj[arr[i]]) {
            return arr[i];
        } else {
            hashObj[arr[i]] = i+1;
        }
    }
    return undefined;
}