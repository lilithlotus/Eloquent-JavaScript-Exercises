/*
Arrays have a method reverse , which changes the array by inverting the order
in which its elements appear. For this exercise, write two functions,
reverseArray and reverseArrayInPlace . The first, reverseArray , takes an array
as argument and produces a new array that has the same elements in the inverse
order. The second, reverseArrayInPlace , does what the reverse method does:
it modifies the array given as argument in order to reverse its in the previous
chapter , which variant do you expect to be useful in more situations? Which
one is more efficient?
*/

function reverseArray(array) {
  var newArray = [];
  for(var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
