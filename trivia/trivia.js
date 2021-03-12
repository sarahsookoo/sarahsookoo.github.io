var questions = [" How many soccer players should each team have on the field at the start of each match?",
"What year was the very first model of the iPhone released?",
"What does HTTP stand for?", "How many legs does a spider have?", "How many days are in a year?",
"What is a group of lions called?", "What is the name of Harry Potters pet owl?", "Hg is the chemical symbol of which element?",
"What color starts first in chess?", "What language has the most words?", "Name the worlds biggest island", "How many hearts does an octopus have?",
"Which planet has the most gravity?", "What is your bodys largest organ?"];

var answers = ["11", "2007", "hypertext transfer protocol", "8", "365", "a pride","hedwig", "mercury", "white", "english",
"greenland", "3", "jupiter", "skin"];

var num = Math.floor(Math.random()*questions.length);

function trivia(){ //opens trivia.html when button is pressed
    var myWindow = window.open("trivia/trivia.html", "_blank");
}

function problems(){ //gives the user a random question
var randomQues = questions[num];
//document.writeln(randomQues);
document.getElementById("question").innerHTML = randomQues;
}

function checkAns(){ //checks the users answer to the random question
    var x = document.getElementsByName("firstname")[0].value;
    var input = document.getElementsByName("ans")[0].value;
    if (input == ""){
        alert("Answer must be filled out");
    }
    else if (input.toLowerCase() == answers[num]){
        document.getElementById("ans").innerHTML = "Congrats " + x + ", you're correct";
        unHide3();
    }
    else {
        document.getElementById("ans").innerHTML = "Wrong answer " + x + ", the correct answer is " + answers[num];
        unHide3();
    }
}

function validateForm() { //checks the name that the user gives
    var x = document.getElementsByName("firstname")[0].value;
    if (x == "") {
      alert("Name must be filled out");
    }
    else{
        //document.writeln("Hello " + x)
        document.getElementById("demo").innerHTML = "Hello " + x + "!";
        unHide()
    }
  }

  function unHide(){ //changes the start button to visible
    var z = document.getElementsByClassName("show")[0];
    if(z.style.visibility = "hidden"){
        z.style.visibility = "visible";
    }
}

function hide(){
    var z = document.getElementsByClassName("show")[0];
    z.innerHTML = '';
}

function unHide2(){ //changes the question, input box and submit button to visible
    var z = document.getElementsByClassName("show2")[0];
    if(z.style.visibility = "hidden"){
        z.style.visibility = "visible";
    }
}

function unHide3(){ //changes feedback, answer, and next question to visible
    var z = document.getElementsByClassName("show3")[0];
    if(z.style.visibility = "hidden"){
        z.style.visibility = "visible";
    }
}

function replace(){
    var user = document.getElementsByName("firstname")[0].value;
    document.getElementById('show2').innerHTML = '';

    var newQues = document.createElement('p'); //new question
    var ind = Math.floor(Math.random()*questions.length)
    newQues.innerHTML = questions[ind]; 
    document.getElementById('show2').appendChild(newQues);

    var i = document.createElement("input"); //new input box
    i.setAttribute('type',"text");
    i.setAttribute('name',"answer2");
    document.getElementById('show2').appendChild(i);

    var button = document.createElement("button"); //new button
    //button.setAttribute("name", "submit");
    button.innerHTML = "Submit";
    button.className = "button"; 
    button.addEventListener ("click", function(){
        if (i.value == ""){
            alert("Answer must be filled out");
        }
        else if (i.value.toLowerCase() == answers[ind]){
            //document.getElementById('show2').innerHTML= "this is index 0" ;
            var node = document.createElement("ul");
            var textnode = document.createTextNode("Congrats " + user + ", you're correct!");
            node.appendChild(textnode);
            document.getElementById("show2").appendChild(node);
            document.getElementById("show2").removeChild(button);
            //document.getElementById("show2").removeEventListener("click");
            }
        else{
            //document.getElementById('show2').innerHTML= "this is not index 0" ;
            var node = document.createElement("ul");
            var textnode = document.createTextNode("Wrong answer " + user + ", the correct answer is " + answers[ind]);
            node.appendChild(textnode);
            document.getElementById("show2").appendChild(node);
            document.getElementById("show2").removeChild(button);
            //document.getElementById("show2").removeEventListener("click");
        }
    }
    );
    document.getElementById('show2').appendChild(button);
}

  