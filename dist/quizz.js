"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startQuiz = startQuiz;
const Question_1 = require("./Question");
const questions_1 = require("./questions");
const readline_1 = __importDefault(require("readline"));
const input = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function askQuestion(query) {
    return new Promise((resolve) => input.question(query, resolve));
}
function formatChoice(choice, index) {
    const letter = String.fromCharCode(97 + index);
    return [letter, `${letter}) ${choice}`];
}
function startQuiz() {
    console.log("Welcome to the Quizzz!");
    input.question("What would you like to do? \n \n1. Start a quiz \n2. Add questions to a quiz \n3. Exit \n", (answer) => {
        switch (answer) {
            case '1':
                input.question("\n Select one of the following classes by number: \n" + questions_1.courses.map((course, i) => `${i + 1}. ${course.name}`).join('\n') + '\n>> ', (courseAnswer) => __awaiter(this, void 0, void 0, function* () {
                    const selected = questions_1.courses.find((c) => c.id === courseAnswer.trim());
                    if (!selected) {
                        console.log('Please choose another option');
                        input.close();
                        return;
                    }
                    console.log("\n You got this!");
                    let score = 0;
                    let exit = false;
                    // let questions: Prompts[] = [];
                    for (const [index, question] of selected.questions.entries()) {
                        let correct = false;
                        while (!correct && !exit) {
                            console.log(`\n${index + 1}. ${question.prompt}`);
                            question.choices.forEach((choice, i) => {
                                const [, formatted] = formatChoice(choice, i);
                                console.log(formatted);
                            });
                            const userAnswer = yield askQuestion(`\n>> `);
                            if (userAnswer === 'exit') {
                                exit = true;
                                break;
                            }
                            if (question.isCorrect(userAnswer)) {
                                console.log("✅ Correct!");
                                correct = true;
                                score++;
                            }
                            else {
                                console.log("❌ Oops! Try again or type exit to stop the quiz.");
                                --score;
                            }
                        }
                        if (exit) {
                            console.log('\n🚪 You exited the quiz, is alright you needed a break anyways.');
                            break;
                        }
                    }
                    if (exit) {
                    }
                    else {
                        console.log(`\n🎉 You did it! Your final score is: ${score}/${selected.questions.length}`);
                        input.close();
                    }
                }));
                break;
            case '2':
                input.question('\n What class do you want to add a question to? \n' + questions_1.courses.map(c => `${c.id}. ${c.name}`).join('\n') + '\n>> ', (courseAnswer) => {
                    const selected = questions_1.courses.find((c) => c.id === courseAnswer.trim());
                    if (!selected) {
                        console.log("Class not found.");
                        input.close();
                        return;
                    }
                    input.question("\nEnter your new question:\n", (promptText) => {
                        input.question("Enter 3 choices separated by commas:\n", (choiceInput) => {
                            const choices = choiceInput.split(",").map((c) => c.trim());
                            input.question("Which is the correct answer? (must match one of the choices):\n", (correctAnswer) => {
                                input.question("Enter an alternative correct answer (or leave blank):\n", (alt) => {
                                    try {
                                        const newQuestion = new Question_1.Question(promptText, choices, correctAnswer.trim(), alt.trim());
                                        selected.questions.push(newQuestion); // Add to the same array
                                        console.log("✅ Your question was added!");
                                    }
                                    catch (err) {
                                        console.log("⚠️ Error adding question:", err.message);
                                    }
                                    input.close();
                                });
                            });
                        });
                    });
                });
                break;
            case '3':
                console.log('See you later');
                input.close();
                break;
            default:
                console.log("Select another option");
        }
    });
}
