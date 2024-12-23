const originalArray = [123, 4, 232, 222];
const newArray = [...originalArray];

originalArray.push(5);
originalArray.push(11);
originalArray.push(7);
originalArray.unshift(0);

originalArray; // [0, 123, 4, 232, 222, 5, 11, 7]
newArray; // [123, 4, 232, 222]