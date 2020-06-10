function mergeSortedArrays(arr1, arr2) {
    const mergedArr = [];
    if(arr1.length === 0 && arr2.length === 0) return mergedArr;
    if(arr1.length === 0) return arr2;
    if(arr2.length === 0) return arr1; 

    let i = 0;
    let j = 0;

    while(arr1[i] || arr2[j]) {
        if(arr1[i] <= arr2[j]) {
            mergedArr.push(arr1[i++]); // O(n) / O(n)
        } else {
            mergedArr.push(arr2[j++] || arr1[i++]); // O(n) / O(n)
        }
    }
    return mergedArr;
}

const arr1 = [ 1, 2, 4, 10, 31, 33 ];
const arr2 = [ 4, 5, 8, 32, 45, 46, 55 ];


console.log(mergeSortedArrays(arr1, arr2))