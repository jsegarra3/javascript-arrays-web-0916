var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arry,elem) {
  return [elem, ...arry];
}

function destructivelyAddElementToBeginningOfArray(arry, elem) {
 arry.unshift(elem);
 return arry;
}

function addElementToEndOfArray(arry,elem) {
  return [...arry,elem]
}

function destructivelyAddElementToEndOfArray(arry,elem) {
  arry.push(elem);
  return arry;
}

function accessElementInArray(arry,i) {
  return arry[i];
}

function removeElementFromBeginningOfArray(arry) {
  arry.shift();
  return arry;
}

function removeElementFromEndOfArray(arry) {
  arry.pop();
  return arry;
}
