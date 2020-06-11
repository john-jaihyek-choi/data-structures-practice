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
    // simply loop nest two loops to check for all possible occurances


// Pseudocode (Naive Solution):
// declare a function called firstRecurrence with a single parameter, arr
    // set a loop that iterates length of arr many times with index as i;
        // set another loop that iterates length of arr many times starting from i plus one index
            // set a condition to check if value of i'th index of arr is equal to value of j'th index of arr,
                // if true, return value of arr at i'th index;
    // return undefined if nothing is returned from the above function

function firstRecurrence(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] === arr[j]) return arr[i];
        }
    }
    return undefined;
}