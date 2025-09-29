// 1. Translate border-left-width to borderLeftWidth
// importance: 5
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.

 function camelize(str) {
    let newString = str.split('-')
    newString = newString.map(
    function(word, index){
       if (index === 0){
        return word.toLowerCase()
       }else{
        return word[0].toUpperCase() + word.slice(1).toLowerCase()
       }
     }
   )
   newString = newString.join("")
   return newString
 }

console.log(camelize("This-Word"))
console.log(camelize("This-IS-A-longer-String"))
// ------------------------------------------------------

// 2. Filter range
// importance: 4
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b){
    return arr.filter(item => (a <= item && item <= b))
}

let filtered = filterRange(arr, 1, 4)

console.log( filtered ); // 3,1 (matching values)

console.log( arr ); // 5,3,8,1 (not modified)

// -------------------------------------------------------------------------------
// 3. Filter range "in place"
// importance: 4
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

// let arr = [5, 2, 3, 4, 6, 8, 1, 0];

function filterRangeInPlace(arr, a, b){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < a || arr[i] > b){
            arr.splice(i, 1)
            i--
        }
    }
}

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log( arr ); // [3, 1]

// -------------------------------------------------------------------------------
// 4. Sort in decreasing order
// importance: 4
let arr = [5, 12, 1, -10, 8];

arr.sort((a, b) => b - a)

console.log( arr ); // 8, 5, 2, 1, -10

// --------------------------------------------------------------------------------
// 5. Copy and sort array
// importance: 5
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr){
    return arr.slice().sort()
}

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)

// --------------------------------------------------------------------------------