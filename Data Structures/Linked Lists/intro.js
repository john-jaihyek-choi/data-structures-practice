// Pointer and Reference
const obj1 = { a: true };
const obj2 = obj1;

obj1.a = 'hi';
delete obj1;

// console.log('1', obj1);
console.log('2', obj2);

// obj2's reference, even after obj1 has been deleted, is still allocated to its original location;

// This is what is referred to as garbage collected program

