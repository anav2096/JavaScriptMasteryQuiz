//Need centered interface that presents question and lists of answers
//Start button starts timer - timer should be housed in a statement about the quiz
//Questions appear one after the other, alert right or wrong answer
//Wrong answers get time deducted
//End when all questions anwswered or timer = 0
//Must log high scored and save initials - make list accessible from main screen
//Will need to create questions, answers, true-false logic, true counter,
//true counter log that stores info and moves high score to top of list


//Question array

var questions = [

    {
        q: "What year was Javascript developed?",
        c: ["2000", "1999", "1995", "2020"],
        a: "1995"
    },
    {
        q: "Javascript is a _______ language?",
        c: ["Object-oriented", "Object-based", "Assembly-language", "High-level"],
        a: "Object-based"
    },
    {
        q: "Who developed Javascript?",
        c: ["Thomas Jefferson", "Abert Einstein", "Brendan Eich", "Nikola Tesla"],
        a: "Brendan Eich"
    },
    {
        q: "What is the meaning of the logical operator && ?",
        c: ["and", "if", "then", "not"],
        a: "and"
    },
    {
        q: "Which operator checks for equality?",
        c: [">", "=", "e", "==="],
        a: "==="
    },
    
];

var score = 0;
var questionArray = 0;
var startButton = document.querySelector("#startButton");
var time = document.querySelector("#time");
var totalTime = 50;
var timeLeft = 0;
var timeDeduct = 5;
var quizBody = document.querySelector("#quizBody");
var answerList = document.createElement("ul");



function createQuiz(questionArray){
  
    quizBody.innerHTML = "";
    answerList.innerHTML = "";
    for (var i=0; i<questions.length; i++){
    var displayQuestion = questions[questionIndex].q;
    var displayAnswers = questions[questionIndex].a;
    quizBody.textContent = displayQuestion;
}

    displayAnswers.forEach(function (newItem) {
        var answerItem = document.createElement("li");
        answerItem.textContent = newItem;
        quizBody.appendChild(answerList);
        answerList.appendChild(answerItem);
        answerItem.addEventListener("click", (compare));
    })
}

function compare(event) {
    var element = event.target;
    if (element.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAtrributes("id" , "createDiv");
    
        if (element.textContent == questions[questionIndex].a){
        score++;
        alert.textContent = "Correct!"
        }
        else {
            totalTime = totalTime - timeDeduct;
            createDiv.textContent = "incorrect";
        }
    
    }
    questionArray++;
    if (questionArray >= questions.length) {

        finished();
        createDiv.textContent = "Total points" + score + "/" + questions.length + "correct";
    } else {
        createQuiz(questionArray);
    } 
        quizBody.appendChile(createDiv);
}




