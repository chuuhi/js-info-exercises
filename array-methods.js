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
       if (index ==0){
         return word.toLowerCase()
       } else {
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

