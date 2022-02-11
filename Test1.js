const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const newArray = [];
for (let i = array.length - 1; i >= 0; i--) {
  newArray.push(array[i]);
}
console.log(newArray);
