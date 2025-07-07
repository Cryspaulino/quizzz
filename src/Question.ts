export class Question {
    constructor(
        public prompt: string,
        public choices: string[],
        public answer: string,
        public altanswer: string = ""
    ) {
        if (!prompt || choices.length < 2 || !answer) {
            throw new Error("Missing required fields for a valid question.");
        }

        if (!choices.includes(answer) && !['a', 'b', 'c'].includes(answer.toLowerCase())) {
            throw new Error("Answer must match one of the choices or be a valid letter (a/b/c).");
        }
    }


    isCorrect(response: string): boolean {
        const ans = response.trim().toLowerCase();
        return ans === this.answer.toLowerCase() || ans === this.altanswer.toLowerCase();
    }
}
