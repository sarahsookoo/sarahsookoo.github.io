var questions = [" How many soccer players should each team have on the field at the start of each match?",
"What year was the very first model of the iPhone released?",
"What does HTTP stand for?"
]

var answers = ["11", "2007", "HyperText Transfer Protocol"];

var num = Math.floor(Math.random()*questions.length);


function facts(){
    var myWindow = window.open("facts.html", "_blank");
}

function trivia(){
    var myWindow = window.open("trivia.html", "_blank");
}

function problems(){
   
var randomQues = questions[num];
//document.writeln(randomQues);
document.getElementById("question").innerHTML = randomQues;
}

function checkAns(){
    var input = document.getElementsByName("ans")[0].value;
    if (input == answers[num]){
        document.getElementById("ans").innerHTML = "Congrats, you're correct";
    }
    else {
        document.getElementById("ans").innerHTML = "Wrong Answer";
    }
    //if input == answers[num], congrats
    
}

function validateForm() {
    var x = document.getElementsByName("firstname")[0].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    else{
        //document.writeln("Hello " + x)
        document.getElementById("demo").innerHTML = "Hello " + x + "!";
    }
  }

  function unHide(){
    var z = document.getElementsByClassName("show")[0];
    if(z.style.visibility = "hidden"){
        z.style.visibility = "visible";
    }
}

function unHide2(){
    var z = document.getElementsByClassName("show2")[0];
    if(z.style.visibility = "hidden"){
        z.style.visibility = "visible";
    }
}

  