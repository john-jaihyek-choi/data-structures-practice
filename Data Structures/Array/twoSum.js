// Leetcode 1

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Brainstorm:
// Questions:
    // Will the array be sorted?
    // Will the values be integer always?
    // Will there always be a match?
    // Are there repeating numbers?
// Assuming that array are NOT sorted, but the values are ALWAYS integers,
    // Sort the array and store the sorted array as a variable
    // keep track of two pointers one will start from left and one other will start from the very right
        // initial value will be 0 for left and array's length - 1 for right
    // loop through the sorted array while left !== right;
        // on each iteration, check if sorted array at left index + sorted array at right index is equal to target number
            // if true return
        // if left index value plus right index value is greater than target
            // decrement right
        // if left index value plus right idnex value is less than the target
            // increment left
    // return 'no match'

// Pseudocode:
// declare a function called twoSum with 2 parameters, nums and target
    // instantiate a variable called sortedArr with an initial value of returned value of calling sort method of the nums object passing in comparison function as an argument;
    // instantiate a variable called left with initial value of 0;
    // instantiate a variable called right with initial value of length property of the nums object minus 1
    // set a loop that iterates while left is not equal to right;
        // on each iteration, set a condition to check if sortedArr at left'th index plus sortedArr at right'th index is equal to the target parameter;
            // if true, return an array with sortedArr at left'th index and sortedArr at right'th index in an array in that order;
        // if sortedArr at left index is greater than the target
            // decrement right variable
        // else,
            // increment left variable
    // return 'no match' if nothing is returned from the above loop;


// O(n) operation with average of 84ms runtime
var twoSum = function(nums, target) {
    const sortedArr = Array.from(nums).sort((a,b) => a-b); // O(n) / O(log(n))
    let left = 0;
    let right = nums.length - 1;

    while(left !== right) {
        const sum = sortedArr[left] + sortedArr[right]; // O(n) / O(n);
        if(sum === target) break; 
        if(sum > target) {
            right--;
        } else{
            left++;
        }
    }

    return [nums.indexOf(sortedArr[left]), nums.lastIndexOf(sortedArr[right])]; // O(n) / O(1);
};


// implementation with HashMap with average of 110ms runtime
var twoSum = function(nums, target) {
    const complementArr = [];
    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if(complementArr.includes(nums[i])) {
            return [nums.indexOf(target-nums[i]), nums.lastIndexOf(nums[i])];
        }
        complementArr.push(complement);
    }
};