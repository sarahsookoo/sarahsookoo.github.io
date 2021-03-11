var questions = [" How many soccer players should each team have on the field at the start of each match?",
"What year was the very first model of the iPhone released?",
"What does HTTP stand for?", "How many legs does a spider have?", "How many days are in a year?",
"What is a group of lions called?", "What is the name of Harry Potters pet owl?"]

var answers = ["11", "2007", "HyperText Transfer Protocol", "8", "365", "A pride","Hedwig"];

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
        unHide3();
    }
    else {
        document.getElementById("ans").innerHTML = "Wrong Answer, the correct answer is " + answers[num];
        //unHide3();
    }
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

function unHide3(){
    var z = document.getElementsByClassName("show3")[0];
    if(z.style.visibility = "hidden"){
        z.style.visibility = "visible";
    }
}

// function hide(){
//     var z = document.getElementsByClassName("show2")[0];
//     if(z.style.visibility = "visible"){
//         z.style.visibility = "hidden";
//     }
// }

function replace(){
    document.getElementById('show2').innerHTML = '';

    var newQues = document.createElement('p');
    newQues.innerHTML = questions[Math.floor(Math.random()*questions.length)];
    document.getElementById('show2').appendChild(newQues);

    var i = document.createElement("input"); //input element, text
    i.setAttribute('type',"text");
    document.getElementById('show2').appendChild(i);

    var b = document.createElement("button"); //input element, text
    b.setAttribute('type',"button");
    b.setAttribute('value',"submit");
    // b.setAttribute('onclick', checkAns())
    document.getElementById('show2').appendChild(b);
}

  