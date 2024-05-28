#! /usr/bin/env node

import inquirer from "inquirer";

const quiz: {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
} = await inquirer.prompt(
    [
        {
            name: "question_1",
            type: "list",
            message: "Q1.Which of the following is true for Typescript?",
            choices: ["Licensed", "Open-sourced", "Commercial", "None of the above"]
        },
        {
            name: "question_2",
            type: "list",
            message: "Q2.Which of the following is NOT an Arithmetic Operator?",
            choices: ["+", "-", "&&", "*"]
        },
        {
            name: "question_3",
            type: "list",
            message: "Q3.Which of the following option is absolutely correct for Relational Operators?",
            choices: [">", "<=", "==", "All of the above"] 
        },
        {
            name: "question_4",
            type: "list",
            message: "Q4.Which of the following is NOT a Primitive Data Type in Typescript?",
            choices: ["array", "string", "boolean", "number"]
        },
        {
            name: "question_5",
            type: "list",
            message: "Q5.What value does a boolean variable hold?",
            choices: ["True or False", "Yes or No", "0 or 1", " On or Off"]
        },
    ]
);

let score: number = 0;

switch(quiz.question_1){
    case "Open-sourced":
        console.log("1. Correct!");
        ++score;
        break;
        default:
            console.log("1. Incorrect!");          
}

switch(quiz.question_2){
    case "&&":
        console.log("2. Correct!");
        ++score;
        break;
        default:
            console.log("2. Incorrect!");
}

switch(quiz.question_3){
    case "All of the above":
        console.log("3. Correct!");
        ++score;
        break;
        default:
            console.log("3. Incorrect!");          
}

switch(quiz.question_4){
    case "array":
        console.log("4. Correct!");
        ++score;
        break;
        default:
            console.log("4. Incorrect!");          
}

switch(quiz.question_5){
    case "True or False":
        console.log("5. Correct!");
        ++score;
        break;
        default:
            console.log("5. Incorrect!");        
}

console.log(`Score: ${score}`);