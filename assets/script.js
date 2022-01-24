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
var time = document.querySelector("#time");
var timer = document.querySelector("#timer");
var totalTime = 50; 
var timeDeduct = 5;
var deductCounter = 0;
var quizBody = document.querySelector("#quizBody");
var answerList = document.createElement("ul");



timer.addEventListener("click", function () {
    
    if (deductCounter === 0) {
        deductCounter = setInterval(function () {
            totalTime--;
            time.textContent = "Time: " + totalTime;

            if (totalTime <= 0) {
                clearInterval(deductCounter);
                finished();
                time.textContent = "Time has run out!";
            }
        }, 1000);
    }
    createQuiz(questionArray);
});

function createQuiz(questionArray){
  
    quizBody.innerHTML = "";
    answerList.innerHTML = "";
    for (var i = 0; i <questions.length; i++){
    var displayQuestion = questions[questionArray].q;
    var displayChoices = questions[questionArray].c;
    quizBody.textContent = displayQuestion;
}

    displayChoices.forEach(function (newItem) {
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
        createDiv.setAttribute("id" , "createDiv");
    
        if (element.textContent == questions[questionArray].a){
        score++;
        createDiv.textContent = "Correct!"
        }
        else {
            totalTime = totalTime - timeDeduct;
            createDiv.textContent = "Incorrect";
        }
    
    }
    questionArray++;
    if (questionArray >= questions.length) {

        finished();
        createDiv.textContent = "Total points" + score + "/" + questions.length + "correct";
    } else {
        createQuiz(questionArray);
    } 
        quizBody.appendChild(createDiv);
}

function finished() {
    quizBody.innerHTML = "";
    time.innerHTML = "";

    // Heading:
    var endH1 = document.createElement("h1");
    endH1.setAttribute("id", "finishingH1");
    endH1.textContent = "Quiz Over"

    quizBody.appendChild(endH1);

    // Paragraph
    var endP = document.createElement("p");
    endP.setAttribute("id", "endP");

    quizBody.appendChild(endP);

    if (time >= 0) {
        var timeLeft = time;
        var createP2 = document.createElement("p");
        clearInterval(deductCounter);
        endP.textContent = "Your final time is: " + timeLeft;

        quizBody.appendChild(createP2);
    }
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter initials: ";

    quizBody.appendChild(createLabel);


    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    quizBody.appendChild(createInput);

    // submit
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    quizBody.appendChild(createSubmit);
    
    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {

            console.log("No value entered!");

        } else {
            var finalScore = {
                initials: initials,
                score: time
                
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            window.location.replace("./ScoreLog.html");
        }
    });

}




