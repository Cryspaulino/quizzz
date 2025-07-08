import { Question } from "./Question";
import { courses, Course } from "./questions";
import readline from 'readline';

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(query: string): Promise<string> {
    return new Promise((resolve) =>
        input.question(query, resolve));
}

function formatChoice(choice: string, index: number): [string, string] {
    const letter = String.fromCharCode(97 + index);
    return [letter, `${letter}) ${choice}`];
}

export function startQuiz() {
    console.log("Welcome to the Quizzz!");

    input.question("What would you like to do? \n \n1. Start a quiz \n2. Add questions to a quiz \n3. Exit \n", (answer) => {
        switch (answer) {
            case '1':
                input.question("\n Select one of the following classes by number: \n" + courses.map((course, i) => `${i + 1}. ${course.name}`).join('\n') + '\n>> ', async (courseAnswer) => {
                    const selected = courses.find((c) => c.id === courseAnswer.trim());
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

                            const userAnswer = await askQuestion(`\n>> `);

                            if (userAnswer === 'exit') {
                                exit = true;
                                break;
                            }

                            if (question.isCorrect(userAnswer)) {
                                console.log("✅ Correct!");
                                correct = true;
                                score++;
                            } else {
                                console.log("❌ Oops! Try again or type exit to stop the quiz.");
                                -- score;
                            }
                        }
                        if (exit) {
                            console.log('\n🚪 You exited the quiz, is alright you needed a break anyways.')
                            break;
                        }
                    }

                    if (exit) {
                    } else {
                        console.log(`\n🎉 You did it! Your final score is: ${score}/${selected.questions.length}`)
                        input.close();
                    }
                });
                break;


            case '2':
                input.question('\n What class do you want to add a question to? \n' + courses.map(c => `${c.id}. ${c.name}`).join('\n') + '\n>> ', (courseAnswer) => {
                    const selected = courses.find((c) => c.id === courseAnswer.trim());
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
                                        const newQuestion = new Question(promptText, choices, correctAnswer.trim(), alt.trim());

                                        selected.questions.push(newQuestion); // Add to the same array
                                        console.log("✅ Your question was added!");

                                    } catch (err) {
                                        console.log("⚠️ Error adding question:", (err as Error).message);
                                    }
                                    input.close();
                                });
                            });
                        });
                    });
                })
                break;

            case '3':
                console.log('See you later')
                input.close();
                break;

            default:
                console.log("Select another option");
        }
    })
}