const quizQuestions = [
  {
    question:
      "What is the output of the following code: console.log (2 + '2');",
    choices: ["44", "222", "4", "22"],
    correct: "22"
  },
  {
    question:
      "Which of the following is not a comparison operator in JavaScript?",
    choices: ["==", "===", "!=", "=<"],
    correct: "=<"
  },
  {
    question:
      "What is the output of the following code: var x = 5; console.log(x++);",
    choices: ["4", "5", "6", "Error"],
    correct: "5"
  },
  {
    question:
      "What is the output of the following code: var x = true; console.log(!x);",
    choices: ["true", "false", "undefined", "Error"],
    correct: "false"
  },
  {
    question: "What does the 'NaN' value represent in JavaScript?",
    choices: ["Not a number", "Null value", "Undefined value", "Boolean value"],
    correct: "Not a number"
  },
  {
    question:
      "What is the output of the following code: var x = 5; var y = '5'; console.log (x == y);",
    choices: ["true", "false", "undefined", "Error"],
    correct: "true"
  },
  {
    question: "What is the correct way to declare a variable in JavaScript?",
    choices: ["var x = 5;", "variable x = 5;", "x = 5;", "let x = 5;"],
    correct: "let x = 5;"
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    choices: [
      "The current function",
      "The global object",
      "The object that the function belongs to",
      "The parent object of the current object"
    ],
    correct: "The object that the function belongs to"
  },
  {
    question:
      "What is the output of the following code: var x = [1, 2, 3]; console.log (x.length);",
    choices: ["1", "2", "3", "4"],
    correct: "3"
  },
  {
    question:
      "What is the output of the following code: console.log (typeof NaN);",
    choices: ["number", "string", "undefined", "NaN"],
    correct: "number"
  },
  {
    question: "What does the 'forEach' method do in JavaScript?",
    choices: [
      "Adds a new element to the end of an array",
      "Removes an element from the beginning of an array",
      "Executes a function once for each element in an array",
      "Reverses the order of the elements in an array"
    ],
    correct: "Executes a function once for each element in an array"
  },
  {
    question: "What is the output of the following code: console.log (2 ** 3);",
    choices: ["5", "6", "8", "9"],
    correct: "8"
  },
  {
    question: "What is the correct syntax for a 'for' loop in JavaScript?",
    choices: [
      "for (var i = 0; i < 5; i++)",
      "for (i = 0; i < 5; i++)",
      "for (var i = 5; i > 0; i--)",
      "for (i = 5; i > 0; i--)"
    ],
    correct: "for (var i = 0; i < 5; i++)"
  },
  {
    question:
      "What is the difference between '==' and '===' operators in JavaScript?",
    choices: [
      "They are interchangeable",
      "'==' performs a strict comparison, while '===' performs a loose comparison",
      "'===' performs a strict comparison, while '==' performs a loose comparison",
      "They both perform the same type of comparison"
    ],
    correct:
      "'===' performs a strict comparison, while '==' performs a loose comparison"
  }
];
