"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courses = exports.questiond = exports.questiona = exports.questionz = void 0;
const Question_1 = require("./Question");
// 🔢 Discrete Mathematics
exports.questionz = [
    new Question_1.Question('What is 92 mod 56?', ['36', '87', '2'], 'a', '36'),
    new Question_1.Question('What is the result of 2^5 mod 7?', ['4', '3', '2'], 'a', '4'),
    new Question_1.Question('How many subsets does a set with 4 elements have?', ['8', '16', '4'], 'b', '16'),
    new Question_1.Question('What is the greatest common divisor (GCD) of 36 and 48?', ['6', '12', '18'], 'b'),
    new Question_1.Question('Which traversal method visits the root node before its subtrees?', ['Post-order', 'Pre-order', 'In-order'], 'b'),
    new Question_1.Question('Which of the following is a tautology?', ['P ∨ ¬P', 'P ∧ ¬P', '¬(P ∧ Q)'], 'a'),
    new Question_1.Question('How many elements are in the set {1, 2, 3}?', ['2', '3', '4'], 'b'),
    new Question_1.Question('Which symbol means "and" in logic?', ['∨', '∧', '¬'], 'b'),
    new Question_1.Question('What is the result of 10 mod 3?', ['1', '2', '3'], 'a'),
    new Question_1.Question('Which of the following is a set?', ['(2, 3)', '[2, 3]', '{2, 3}'], 'c'),
];
// 📊 Business Analytics
exports.questiona = [
    new Question_1.Question('What type of join shows all records from the left table and matches from the right?', ['Inner Join', 'Left Join', 'Outer Join'], 'b', 'Left Join'),
    new Question_1.Question('In Power BI, which function is used to divide two values safely?', ['DIVIDE()', 'SPLIT()', 'SAFE_DIV()'], 'a', 'divide()'),
    new Question_1.Question('Which chart is best for showing part-to-whole relationships?', ['Line chart', 'Pie chart', 'Scatter plot'], 'b'),
    new Question_1.Question('What does ETL stand for in data processing?', ['Extract, Transfer, Load', 'Extract, Transform, Load', 'Enter, Transform, Learn'], 'b'),
    new Question_1.Question('Which visual best shows a trend over time?', ['Pie chart', 'Line chart', 'Map'], 'b'),
    new Question_1.Question('In Tableau, which field type is used for numbers?', ['String', 'Boolean', 'Measure'], 'c'),
    new Question_1.Question('What does a filter do in a report?', ['Adds data', 'Sorts data', 'Limits what you see'], 'c'),
];
// 💻 Programming with Data Structures
exports.questiond = [
    new Question_1.Question('Which data structure uses FIFO (First In, First Out)?', ['Stack', 'Queue', 'Tree'], 'b', 'Queue'),
    new Question_1.Question('Which data structure connects nodes in pairs?', ['Array', 'Linked List', 'Tuple'], 'b', 'Linked List'),
    new Question_1.Question('What is the time complexity of searching in a balanced binary search tree?', ['O(n)', 'O(log n)', 'O(1)'], 'b', 'O(log n)'),
    new Question_1.Question('Which structure allows dynamic resizing?', ['Linked List', 'Array', 'Dynamic Array'], 'c'),
    new Question_1.Question('Which data structure stores values in order?', ['Array', 'Graph', 'Tree'], 'a'),
    new Question_1.Question('Which data structure adds/removes from the end?', ['Queue', 'Stack', 'Set'], 'b'),
];
exports.courses = [
    {
        id: '1',
        name: 'Discrete Mathematics',
        questions: exports.questionz
    },
    {
        id: '2',
        name: 'Business Analytics',
        questions: exports.questiona
    },
    {
        id: '3',
        name: 'Programming with Data Structures',
        questions: exports.questiond
    }
];
