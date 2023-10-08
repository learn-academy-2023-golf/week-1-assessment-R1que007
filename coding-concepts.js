// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]

console.log(colors.push(["indigo"]))


// a) Your answer: "tangerine", "magenta", "lilac", "daffodil", "indigo" 
//answer: 5
// b) Verify and explain: The code added the element "indigo" but return the index of the element. console.log(colors[4]) will return the value of the fifth element in the array which is "indigo"

// --------------------1) What will this log?

const cohort = "LEARN 2023"

console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: The string "LEARN 2023" contains 10 elements.

// --------------------2) What will this log?

const greeting = "Hello World!"
 console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: Strings are zero indexed. Therefor greeting[4] returns the fifth character in the string "LEARN 2023".

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: Arrays are zero indexed meaning that the the 1 index in arra

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY, SUNDAY
//answer: weedendDays.toUpperCase is not a function
// b) Verify and explain: .toUpperCase() is a method for strings not available for arrays.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: typeof returns the data type of dataTypes.length. The data type of .langth is a number.
