// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// Expected outcome: "banana"
// Set two:
const fruit1 = "cherry"
const fruit2 = "apple"
// Expected outcome: "cherry"
// Pseudo code:
// create astatements that evaluates wether fruit1.lenght > fruit2.lenght
// if so console.log fruit 1
// create an else statement to console.log fruit 2
// i kinda went overkill on this one. i was just trying to think of every scenario.

if (fruit1 === null || fruit2 === null) {
    console.log("values for fruit1 and fruit2 can't be null")
} else {
    if (fruit1.length > fruit2.length) {
        console.log(`${fruit1}`)
    } else if (fruit1.length < fruit2.length) {
            console.log(`${fruit2}`)
    } else if (fruit1.length === fruit2.length) {
        console.log("They have an equal amount of characters")
    } else {
        console.log("Houston we have a problem")
    }
}
// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
// find the length of each variable
// return the sum

    // console.log(padres1984WorldSeriesRuns.length + padres1998WorldSeriesRuns.length)

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "LEARN 2023"
// Expected output: "3202 NRAEL"

// Pseudo code:
// decrlare new variable 
// convert string to array using split.("")
// reverse
// join back to string
// return 

 var reversedCurrentCohort = currentCohort.split("")

// reversedCurrentCohort = reversedCurrentCohort.reverse()
// reversedCurrentCohort = reversedCurrentCohort.join("")

reversedCurrentCohort = reversedCurrentCohort.reverse().join("")

console.log(reversedCurrentCohort)

// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code:
//create for loop that iterates .length times
//create a conditional that checks if the value of the index in the array is odd % 2 = 1
//put that in a loop from 0 to .length
//output if ood true

//----------------------------------------------
for (let i = 0; i < stockExchange.length; i++){
    if (stockExchange[i] % 2 === 1){
        console.log(stockExchange[i])
    }
//-----> 13, 5, 27
}
//----------------------------------------------
for (let i = 0; i < stockExchange.length; i++){
    if (!(stockExchange[i] % 2 === 0)){
        console.log(stockExchange[i])
    }
}
//----> 13, 5, -5, 27