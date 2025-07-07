"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
class Question {
    constructor(prompt, choices, answer, altanswer = "") {
        this.prompt = prompt;
        this.choices = choices;
        this.answer = answer;
        this.altanswer = altanswer;
        if (!prompt || choices.length < 2 || !answer) {
            throw new Error("Missing required fields for a valid question.");
        }
        if (!choices.includes(answer) && !['a', 'b', 'c'].includes(answer.toLowerCase())) {
            throw new Error("Answer must match one of the choices or be a valid letter (a/b/c).");
        }
    }
    isCorrect(response) {
        const ans = response.trim().toLowerCase();
        return ans === this.answer.toLowerCase() || ans === this.altanswer.toLowerCase();
    }
}
exports.Question = Question;
