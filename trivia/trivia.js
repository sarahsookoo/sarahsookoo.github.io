var questions = [" How many soccer players should each team have on the field at the start of each match?",
    "What year was the very first model of the iPhone released?", "What does HTTP stand for?", "How many legs does a spider have?", "How many days are in a year?",
    "What is a group of lions called?", "What is the name of Harry Potters pet owl?", "Hg is the chemical symbol of which element?",
    "What color starts first in chess?", "What language has the most words?", "Name the worlds biggest island", "How many hearts does an octopus have?",
    "Which planet has the most gravity?", "What is your bodys largest organ?", "According to Greek mythology, who was the first woman on earth?",
    "Which country consumes the most chocolate per capita?", "Which two U.S. states do not observe Daylight Saving Time?", "What is the loudest animal on Earth?",
    "What is the tiny piece at the end of a shoelace called?", "Which of Shakespeares plays is the longest?", "What is the softest mineral in the world?",
    "How many ribs are in a human body?", "Which country is known as the Land of White Elephant?", "Which planet is the hottest in the solar system?",
    "Which country produces the most coffee in the world?", "What is the common name for dried plums?", "Which two countries share the longest international border?",
    "What is the smallest country in the world?", "Which mammal has no vocal cords?", "The Statue of Liberty was given to the US by which country?",
    "Which chess piece can only move diagonally?", "Which country was the Caesar salad invented in?", "What is the most common letter in the English alphabet?",
    "What animal is constitutionally protected in Florida?", "What is a community of ants called?", "What geometric shape is generally used for stop signs?",
    "How many languages are written from right to left?", "Which animal can be seen on the Porsche logo?", "What is the name of the largest ocean on earth?",
    "What is the rarest M&M color?", "Which is the only edible food that never goes bad?", "Which country invented ice cream?",
    "Which country won the first-ever soccer World Cup in 1930?", "Who was the first president of the United States?"];

var answers = ["11", "2007", "hyperText Transfer Protocol", "8", "365", "A Pride", "Hedwig", "Mercury", "white", "english",
    "Greenland", "3", "Jupiter", "skin", "Pandora", "Switzerland", "Arizona and Hawaii", "The sperm whale", "An aglet", "Hamlet",
    "Talc", "24", "Thailand", "Venus", "Brazil", "Prunes", "Canada and the USA", "Vatican City", "Giraffe", "France", "Bishop",
    "Mexico", "E", "Pigs", "A colony", "Octagon", "12", "Horse", "Pacific Ocean", "Brown", "Honey", "China", "Uruguay", "George Washington"];

var num = Math.floor(Math.random() * questions.length);

var score = 0;
var quesNum = 0;
document.getElementById("scoreDis").innerHTML = "Questions Answered: " + quesNum + " | Score: " + score;

function trivia() { //opens trivia.html when button is pressed
    var myWindow = window.open("trivia/trivia.html", "_blank");
}

function problems() { //gives the user a random question
    var randomQues = questions[num];
    //document.writeln(randomQues);
    document.getElementById("question").innerHTML = randomQues;
}

function checkAns() { //checks the users answer to the random question
    var x = document.getElementsByName("firstname")[0].value;
    var input = document.getElementsByName("ans")[0].value;
    if (input == "") {
        alert("Answer must be filled out");
    }
    else if (input.toLowerCase() == answers[num].toLowerCase() || input.toLowerCase() == answers[num].toLowerCase() + " ") {
        hideSub();
        quesNum++;
        document.getElementById("ans").innerHTML = "Congrats " + x + ", you're correct!";
        score++;
        document.getElementById("scoreDis").innerHTML = "Questions Answered: " + quesNum + " | Score: " + score;
        unHide3();
        unHideGoodJob();
    }
    else {
        hideSub();
        quesNum++;
        document.getElementById("ans").innerHTML = "Wrong answer " + x + ", the correct answer is " + answers[num];
        document.getElementById("scoreDis").innerHTML = "Questions Answered: " + quesNum + " | Score: " + score;
        unHide3();
        unHideNextTime();
    }
}

function validateForm() { //checks the name that the user gives
    var x = document.getElementsByName("firstname")[0].value;
    if (x == "") {
        alert("Name must be filled out");
    }
    else {
        //document.writeln("Hello " + x)
        document.getElementById("demo").innerHTML = "Hello " + x + "!";
        unHide();
        unHideGoodLuck();
    }
}

function unHide() { //changes the start button to visible
    var z = document.getElementsByClassName("show")[0];
    if (z.style.visibility = "hidden") {
        z.style.visibility = "visible";
    }
}

function hide() {
    var z = document.getElementsByClassName("show")[0];
    z.innerHTML = '';
}

function hideSub() {
    document.getElementById("hide").style.visibility = "hidden";
}

function unHide2() { //changes the question, input box and submit button to visible
    var z = document.getElementsByClassName("show2")[0];
    if (z.style.visibility = "hidden") {
        z.style.visibility = "visible";
    }
}

function unHide3() { //changes feedback, answer, and next question to visible
    var z = document.getElementsByClassName("show3")[0];
    if (z.style.visibility = "hidden") {
        z.style.visibility = "visible";
    }
}

function unHideGoodJob() {
    var z = document.getElementsByClassName("goodjob")[0];
    if (z.style.visibility = "hidden") {
        z.style.visibility = "visible";
    }
}

function unHideNextTime() {
    var z = document.getElementsByClassName("nextTime")[0];
    if (z.style.visibility = "hidden") {
        z.style.visibility = "visible";
    }
}

function unHideGoodLuck() {
    var z = document.getElementById("goodLuck");
    if (z.style.visibility = "hidden") {
        z.style.visibility = "visible";
    }
}

function hideGoodJob() {
    var z = document.getElementsByClassName("goodjob")[0];
    if (z.style.visibility = "visible") {
        z.style.visibility = "hidden";
    }
}

function hideNextTime() {
    var z = document.getElementsByClassName("nextTime")[0];
    if (z.style.visibility = "visible") {
        z.style.visibility = "hidden";
    }
}

function replace() {
    var user = document.getElementsByName("firstname")[0].value;
    document.getElementById('show2').innerHTML = '';

    var newQues = document.createElement('p'); //new question
    var ind = Math.floor(Math.random() * questions.length)
    newQues.innerHTML = questions[ind];
    document.getElementById('show2').appendChild(newQues);

    var i = document.createElement("input"); //new input box
    i.setAttribute('type', "text");
    i.setAttribute('name', "answer2");

    document.getElementById('show2').appendChild(i);

    var button = document.createElement("button"); //new button
    //button.setAttribute("name", "submit");
    button.innerHTML = "Submit";
    button.className = "button";
    button.addEventListener("click", function () {
        if (i.value == "") {
            alert("Answer must be filled out");
        }
        else if (i.value.toLowerCase() == answers[ind].toLowerCase() || i.value.toLowerCase() == answers[ind].toLowerCase() + " ") {
            score++;
            quesNum++;
            document.getElementById("scoreDis").innerHTML = "Questions Answered: " + quesNum + " | Score: " + score;
            var node = document.createElement("ul");
            var textnode = document.createTextNode("Congrats " + user + ", you're correct!");
            node.appendChild(textnode);
            unHideGoodJob();
            document.getElementById("show2").appendChild(node);
            document.getElementById("show2").removeChild(button);
        }
        else {
            quesNum++;
            document.getElementById("scoreDis").innerHTML = "Questions Answered: " + quesNum + " | Score: " + score;
            var node = document.createElement("ul");
            var textnode = document.createTextNode("Wrong answer " + user + ", the correct answer is " + answers[ind]);
            node.appendChild(textnode);
            unHideNextTime();
            document.getElementById("show2").appendChild(node);
            document.getElementById("show2").removeChild(button);
        }
    }
    );
    document.getElementById('show2').appendChild(button);
}

