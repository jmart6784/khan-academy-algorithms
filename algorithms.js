// Binary search iteration
var doSearch = function (array, targetValue) {
  var min = 0;
  var max = array.length - 1;
  var guess;

  while (max >= min) {
    guess = Math.floor((max + min) / 2);

    if (array[guess] === targetValue) {
      return guess;
    } else if (array[guess] < targetValue) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }

  return -1;
};

var primes = [
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97,
];

// var result = doSearch(primes, 73);
// console.log("Binary search found prime at index " + result);

// Selection sort
var swap = function (array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

var indexOfMinimum = function (array, startIndex) {
  var minValue = array[startIndex];
  var minIndex = startIndex;

  for (var i = minIndex + 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minIndex = i;
      minValue = array[i];
    }
  }
  return minIndex;
};

var selectionSort = function (array) {
  for (var i = 0; i < array.length; i++) {
    var smallIndex = indexOfMinimum(array, i);
    swap(array, smallIndex, i);
  }
};

var array = [22, 11, 99, 88, 9, 7, 42];
// selectionSort(array);
// console.log("Array after sorting:  " + array);

// Insertion sort
var insert = function (array, rightIndex, value) {
  for (var j = rightIndex; j >= 0 && array[j] > value; j--) {
    array[j + 1] = array[j];
  }
  array[j + 1] = value;
};

var insertionSort = function (array) {
  for (var x = 1; x < array.length; x++) {
    insert(array, x - 1, array[x]);
  }
};

var array = [22, 11, 99, 88, 9, 7, 42];
// insertionSort(array);
// console.log("Array after insertion sort:  " + array);

// Recursive factorial
var factorial = function (n) {
  // base case:
  if (n === 0) {
    return 1;
  }

  // recursive case:
  return n * factorial(n - 1);
};

// console.log("The value of 5! is " + factorial(5) + ".");

// Returns the first character of the string str
var firstCharacter = function (str) {
  return str.slice(0, 1);
};

// Returns the last character of a string str
var lastCharacter = function (str) {
  return str.slice(-1);
};

// Returns the string that results from removing the first
//  and last characters from str
var middleCharacters = function (str) {
  return str.slice(1, -1);
};

var isPalindrome = function (str) {
  if (str.length <= 1) {
    return true;
  } else if (firstCharacter(str) !== lastCharacter(str)) {
    return false;
  }

  return isPalindrome(middleCharacters(str));
};

// console.log(`Is racecar a palindrome? ${isPalindrome("racecar")}`);
