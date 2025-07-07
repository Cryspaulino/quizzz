export interface Course {
    name: string;
}

export const course: Course[] = [
    {
        name: 'Discrete Mathematics'
    },
    {
        name: 'Business Analytics'
    },
    {
        name: 'Programming with Data Structures'
    }
]

export interface Prompts {
    prompt: string,
    choices: string[],
    answer: string
}

// 🔢 Discrete Mathematics
export const questionz: Prompts[] = [
    {
        prompt: 'What is 92 mod 56?',
        choices: ['36', '87', '2'],
        answer: 'a'
    },
    {
        prompt: 'What is the result of 2^5 mod 7?',
        choices: ['4', '3', '2'],
        answer: 'a'
    },
    {
        prompt: 'How many subsets does a set with 4 elements have?',
        choices: ['8', '16', '4'],
        answer: 'b'
    },
    {
        prompt: 'What is the greatest common divisor (GCD) of 36 and 48?',
        choices: ['6', '12', '18'],
        answer: 'b'
    },
    {
        prompt: 'Which traversal method visits the root node before its subtrees?',
        choices: ['Post-order', 'Pre-order', 'In-order'],
        answer: 'b'
    },
    {
        prompt: 'Which of the following is a tautology?',
        choices: ['P ∨ ¬P', 'P ∧ ¬P', '¬(P ∧ Q)'],
        answer: 'a'
    },
    {
        prompt: 'How many elements are in the set {1, 2, 3}?',
        choices: ['2', '3', '4'],
        answer: 'b'
    },
    {
        prompt: 'Which symbol means "and" in logic?',
        choices: ['∨', '∧', '¬'],
        answer: 'b'
    },
    {
        prompt: 'What is the result of 10 mod 3?',
        choices: ['1', '2', '3'],
        answer: 'a'
    },
    {
        prompt: 'Which of the following is a set?',
        choices: ['(2, 3)', '[2, 3]', '{2, 3}'],
        answer: 'c'
    }
];


// 📊 Business Analytics (Power BI / Tableau)
export const questiona: Prompts[] = [
    {
        prompt: 'What type of join shows all records from the left table and matches from the right?',
        choices: ['Inner Join', 'Left Join', 'Outer Join'],
        answer: 'b'
    },
    {
        prompt: 'In Power BI, which function is used to divide two values safely?',
        choices: ['DIVIDE()', 'SPLIT()', 'SAFE_DIV()'],
        answer: 'a'
    },
    {
        prompt: 'Which chart is best for showing part-to-whole relationships?',
        choices: ['Line chart', 'Pie chart', 'Scatter plot'],
        answer: 'b'
    },
    {
        prompt: 'What does ETL stand for in data processing?',
        choices: ['Extract, Transfer, Load', 'Extract, Transform, Load', 'Enter, Transform, Learn'],
        answer: 'b'
    },
    {
        prompt: 'Which visual best shows a trend over time?',
        choices: ['Pie chart', 'Line chart', 'Map'],
        answer: 'b'
    },
    {
        prompt: 'In Tableau, which field type is used for numbers?',
        choices: ['String', 'Boolean', 'Measure'],
        answer: 'c'
    },
    {
        prompt: 'What does a filter do in a report?',
        choices: ['Adds data', 'Sorts data', 'Limits what you see'],
        answer: 'c'
    }
];

// 💻 Programming with Data Structures
export const questiond: Prompts[] = [
    {
        prompt: 'Which data structure uses FIFO (First In, First Out)?',
        choices: ['Stack', 'Queue', 'Tree'],
        answer: 'b'
    },
    {
        prompt: 'Which data structure connects nodes in pairs?',
        choices: ['Array', 'Linked List', 'Tuple'],
        answer: 'b'
    },
    {
        prompt: 'What is the time complexity of searching in a balanced binary search tree?',
        choices: ['O(n)', 'O(log n)', 'O(1)'],
        answer: 'b'
    },
    {
        prompt: 'Which structure allows dynamic resizing?',
        choices: ['Linked List', 'Array', 'Dynamic Array'],
        answer: 'c'
    },
    {
        prompt: 'Which data structure stores values in order?',
        choices: ['Array', 'Graph', 'Tree'],
        answer: 'a'
    },
    {
        prompt: 'Which data structure adds/removes from the end?',
        choices: ['Queue', 'Stack', 'Set'],
        answer: 'b'
    }
];

// function addCourse(courseObj)
// {
//   course.push(courseObj)
// }