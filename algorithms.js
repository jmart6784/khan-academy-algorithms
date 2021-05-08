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

// Recursive palindrome checker
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

// Recursive power function
var isEven = function (n) {
  return n % 2 === 0;
};

var isOdd = function (n) {
  return !isEven(n);
};

var power = function (x, n) {
  // base case
  if (n === 0) {
    return 1;
  }
  // recursive case: n is negative
  if (n < 0) {
    return 1 / power(x, -n);
  }

  // recursive case: n is odd
  if (isOdd(n)) {
    return power(x, n - 1) * x;
  }
  // recursive case: n is even
  if (isEven(n)) {
    var pow = power(x, n / 2);
    return pow * pow;
  }
};

// console.log("3 to the 2 is " + power(3, 2));
// console.log("3 to the -1 is " + power(3, -1));

// Recursive merge sort algorithm
var merge = function (array, p, q, r) {
  var lowHalf = [];
  var highHalf = [];

  var k = p;
  var i;
  var j;
  for (i = 0; k <= q; i++, k++) {
    lowHalf[i] = array[k];
  }
  for (j = 0; k <= r; j++, k++) {
    highHalf[j] = array[k];
  }

  k = p;
  i = 0;
  j = 0;

  // Repeatedly add lowest element to array[k]
  while (i < lowHalf.length && j < highHalf.length) {
    if (lowHalf[i] < highHalf[j]) {
      array[k] = lowHalf[i];
      i += 1;
    } else {
      array[k] = highHalf[j];
      j += 1;
    }
    k += 1;
  }

  // compare and copy the rest of the remaining values to array[k]
  while (i < lowHalf.length) {
    array[k] = lowHalf[i];
    i += 1;
    k += 1;
  }

  while (j < highHalf.length) {
    array[k] = highHalf[j];
    j += 1;
    k += 1;
  }
};

var array = [3, 7, 12, 14, 2, 6, 9, 11];
merge(array, 0, Math.floor((0 + array.length - 1) / 2), array.length - 1);
// console.log("Array after merging: " + array);

// Quick sort
var swap = function (array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

var partition = function (array, p, r) {
  var q = p;
  for (var j = p; j < r; j++) {
    if (array[j] <= array[r]) {
      swap(array, j, q);
      q++;
    }
  }
  swap(array, r, q);
  return q;
};

var quickSort = function (array, p, r) {
  if (p < r) {
    var pivot = partition(array, p, r);
    quickSort(array, p, pivot - 1);
    quickSort(array, pivot + 1, r);
  }
};

var array = [9, 7, 5, 11, 12, 2, 0, 14, 3, -1, 10, 6];
// quickSort(array, 0, array.length - 1);
// console.log("Array after sorting: " + array);
