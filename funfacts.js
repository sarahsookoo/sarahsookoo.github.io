function facts(){
    var myWindow = window.open("facts.html", "_blank");
}

function trivia(){
    var myWindow = window.open("trivia.html", "_blank");
}

function problems(){
    var questions = [" How many soccer players should each team have on the field at the start of each match?",
    "What year was the very first model of the iPhone released?",
    "What does HTTP stand for?"
]
var randomQues = questions[Math.floor(Math.random()*questions.length)];
document.writeln(randomQues);

// var answers = ["11", "2007", "HyperText Transfer Protocol"]
}

function validateForm() {
    var x = document.getElementsByName("firstname")[0].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    else{
        //document.writeln("Hello " + x)
        document.getElementById("demo").innerHTML = "Hello " + x;
        //call unhide at the end
    }
  }

  function unHide(){

  }