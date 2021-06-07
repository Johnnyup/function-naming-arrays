

function printArrayNames(printArray) {
   for (let i = 0; i < printArray.length; i++) {
      console.log(printArray[i]);
   }
}

let printArray = (["Lena", "James", "Julio"]);
console.log("---");
let printArray2 = (["orange", "apple", "pear"]);

console.log(printArrayNames(printArray));

let arrQuestions = ["Who was the first American woman in space?", "True or false: 5000 meters = 5 Kilometers.", "(5 + 3/2 * 10 =", 'Given the array [8, "Orbit, "Trajectory", 45], what entry is at index 2?', "What is the minimum crew size for the ISS?"];

const input = require('readline-sync');

let samQuest = ("Who is boss? ");

let candAnsSamQuest = input.question(samQuest);

let candAnsArrQuestions = [];
let candAnsArrQuestSheet = [];

function askQuestions(arrQuestions) {
  for (let i = 0; i < arrQuestions.length; i++) {
      let candAnsArrQuestions= input.question(arrQuestions[i]);

  }
}

// agregate correctAnswers

//let arrAggreCandAnswers(candAnsArrQuestions) = [];


/*
function aggreCandAnswers(candAnsArrQuestions) {
  for (let i = 0; i < candAnsArrQuestions.length; i++) {
      let candAnsArrQuestions= push.(input.question(arrQuestions[i]));
}
}

*/





/*



let arrQuestions = ["Who was the first American woman in space?", "True or false: 5000 meters = 5 Kilometers.", "(5 + 3/2 * 10 =", 'Given the array [8, "Orbit, "Trajectory", 45], what entry is at index 2?', "What is the minimum crew size for the ISS?"];

let correctAnswers = ["Sally Ride", "true", 40, "Trajectory", 3];


*/