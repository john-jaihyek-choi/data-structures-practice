function mergeSortedArrays(arr1, arr2) {
    let i = 0;
    let j = 0;
    const mergedArr = [];
    while(arr1[i] || arr2[j]) {
        if(arr1[i] <= arr2[j]) {
            mergedArr.push(arr1[i++]);
        } else {
            mergedArr.push(arr2[j++] || arr1[i++]);
        }
    }
    return mergedArr;
}

const arr1 = [ 1, 2, 4, 10, 31, 33 ];
const arr2 = [ 4, 5, 8, 32, 45, 46, 55 ];


console.log(mergeSortedArrays(arr1, arr2))