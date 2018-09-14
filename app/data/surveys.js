var user = {
    name: "Cefi"
}
var seekerSurvey = [
    {
        qId: 1,
        question: "Do you ever have suicidal thoughts? (1 Never, 5 Very Frequently)",
        choices: [1, 2, 3, 4, 5]

    },
    {
        qId: 2,
        question: "Do you suffer from Multiple Personality Disorder?",
        choices: ['Yes', 'No']
    },
    {
        qId: 3,
        question: "Do you suffer from Down Syndrome?",
        choices: ['Yes', 'No']
    },
]
var helperSurvey = [
    {
        qId: 1,
        question: "What is your level of comfort for working with suicidal patients? (1 Not Comfortable, 5 Very Comfortable)",
        choices: [1, 2, 3, 4, 5]

    },
    {
        qId: 2,
        question: "What is your level of comfort for working with patients with Multiple Personality Disorder? (1 Not Comfortable, 5 Very Comfortable)",
        choices: [1, 2, 3, 4, 5]
    },
    {
        qId: 3,
        question: "What is your level of comfort for working with patients with Down syndrome? (1 Not Comfortable, 5 Very Comfortable)",
        choices: [1, 2, 3, 4, 5]
    },
]
module.exports = {
    seeker: seekerSurvey,
    helper: helperSurvey
}