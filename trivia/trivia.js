var questions = [" How many soccer players should each team have on the field at the start of each match?",
"What year was the very first model of the iPhone released?",
"What does HTTP stand for?", "How many legs does a spider have?", "How many days are in a year?",
"What is a group of lions called?", "What is the name of Harry Potters pet owl?"]

var answers = ["11", "2007", "HyperText Transfer Protocol", "8", "365", "A pride","Hedwig"];

var num = Math.floor(Math.random()*questions.length);

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

function unHide4(){
    var z = document.getElementsByClassName("show4")[0];
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

/*function checkAns2(){
    var input = document.getElementsByName("ans")[0].value;
    if (input == answers[num]){
        document.getElementById("ans").innerHTML = "Congrats, you're correct";
        unHide3();
    }
    else {
        document.getElementById("ans").innerHTML = "Wrong Answer, the correct answer is " + answers[num];
        //unHide3();
    }
}*/


function replace(){
    document.getElementById('show2').innerHTML = '';

    var newQues = document.createElement('p'); //new question
    newQues.innerHTML = questions[Math.floor(Math.random()*questions.length)];
    document.getElementById('show2').appendChild(newQues);

    var i = document.createElement("input"); //new input box
    i.setAttribute('type',"text");
    i.setAttribute('name',"answer2");
    document.getElementById('show2').appendChild(i);

    var button = document.createElement("button"); //new button
    button.innerHTML = "Submit";
    // button.addEventListener ("click", function() {
    //     alert("did something");
    //   });
    // button.addEventListener ("click", checkAns());
    button.addEventListener ("click", checkAns ); //checkans2 should check answer, create an unhide to add to the end
    document.getElementById('show2').appendChild(button);
}

  