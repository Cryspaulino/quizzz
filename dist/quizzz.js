"use strict";
// import { course, Course, questionz, questiona, questiond, Prompts } from "./questions";
// import readline from 'readline';
// const input = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// // const option = readline.createInterface({
// //     input: process.stdin,
// //     output: process.stdout,
// // });
// function askQuestion(query: string): Promise<string> {
//     return new Promise((resolve) =>
//         input.question(query, resolve));
// }
// export function startQuiz() {
//     console.log("Welcome to the Quizzz!");
//     input.question("What would you like to do? \n \n1. Start a quiz \n2. Add questions to a quiz \n3. Exit \n", (answer) => {
//         switch (answer) {
//             case '1':
//                 input.question("\n Select one of the following classes by number: \n1. Discrete Mathematics \n2. Business Analytics \n3. Programming with Data Structures \n", async (answer) => {
//                     console.log("\n You got this!");
//                     switch (answer) {
//                         case '1':
//                             for (const [index, question] of questionz.entries()) {
//                                 console.log(`\n${index + 1}. ${question.prompt}`);
//                                 question.choices.forEach((choice, i) => {
//                                     const letter = String.fromCharCode(97 + i);
//                                     console.log(` ${letter}) ${choice}`);
//                                 })
//                                 const userAnswer = await askQuestion(`\n>> `);
//                                 if (userAnswer.trim() === question.answer) {
//                                     console.log("✅ Correct!");
//                                 } else {
//                                     console.log(`Try again!`);
//                                 }
//                             }
//                             break;
//                         case '2':
//                             for (const [index, question] of questiona.entries()) {
//                                 console.log(`\n${index + 1}. ${question.prompt}`);
//                                 question.choices.forEach((choice, i) => {
//                                     const letter = String.fromCharCode(97 + i);
//                                     console.log(` ${letter}) ${choice}`);
//                                 })
//                                 const userAnswer = await askQuestion(`\n>> `);
//                                 if (userAnswer.trim() === question.answer) {
//                                     console.log("✅ Correct!");
//                                 } else {
//                                     console.log(`Try again!`);
//                                 }
//                             }
//                             break;
//                         case '3':
//                             for (const [index, question] of questiond.entries()) {
//                                 console.log(`\n${index + 1}. ${question.prompt}`);
//                                 question.choices.forEach((choice, i) => {
//                                     const letter = String.fromCharCode(97 + i);
//                                     console.log(` ${letter}) ${choice}`);
//                                 })
//                                 const userAnswer = await askQuestion(`\n>> `);
//                                 if (userAnswer.trim() === question.answer) {
//                                     console.log("✅ Correct!");
//                                 } else {
//                                     console.log(`Try again!`);
//                                 }
//                             }
//                             break;
//                     }
//                 })
//                 break;
//             case '2':
//                 input.question('What class do you want to add a question to? \n1. Discrete Mathematics \n2. Business Analytics \n3. Programming with Data Structures \n', (answer) => {
//                     if (answer === '1') {
//                         console.log('These are the current questions: ')
//                         questionz.forEach((question, index) => {
//                             console.log(`${index + 1}. ${question.prompt}`);
//                         })
//                     }
//                 })
//                 input.question("Enter your new question:\n", (promptText) => {
//                     input.question("Enter 3 choices separated by commas:\n", (choiceInput) => {
//                         const choices = choiceInput.split(",").map((c) => c.trim());
//                         input.question("Which is the correct answer? (must match one of the choices):\n", (correctAnswer) => {
//                             questionz.push({
//                                 prompt: promptText,
//                                 choices: choices,
//                                 answer: correctAnswer.trim()
//                             });
//                             console.log("✅ Your question was added!");
//                             console.log("All current questions:");
//                             questionz.forEach((q, i) => {
//                                 console.log(`${i + 1}. ${q.prompt}`);
//                             });
//                             // Optional: show it
//                             console.log(questionz[questionz.length - 1]);
//                             // Now ask what they want to do again, or close:
//                             input.close();
//                         });
//                     });
//                 });
//                 break
//             case '3':
//                 console.log('See you later')
//                 input.close();
//                 break;
//             default:
//                 console.log("Select another option");
//         }
//     })
// }
