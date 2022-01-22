let surveyOne = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addsurveyOne = (ev) => {
    ev.preventDefault();  //to stop the form submitting
    let surveyOne = {
        //id: Date.now(),
        name: document.getElementById('name').value,
        question: document.getElementById('question').value,
        comments: document.getElementById('comments').value

    }
    //surveyOne.push(surveyOne);
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();

    //for display purposes only
    let pre = document.querySelector('#msg pre');
    //let pre = document.getElementById('msg')
    // pre.innerHTML = '\n' + JSON.stringify(surveyOne, '\t', 2);
    //pre.appendChild(JSON.stringify(surveyOne, '\t', 2));  
    var h = document.getElementById("msg");
    h.insertAdjacentHTML("afterbegin", JSON.stringify(surveyOne, '\t', 2))

    // pre.innerHTML = "testing"

    //saving to localStorage
    localStorage.setItem('MysurveyOneList', JSON.stringify(surveyOne));
}
    document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', addsurveyOne);
});


function validation() {
    var z = document.getElementById("msg");
    var user = document.getElementsByName("name")[0].value;
    var pass = document.getElementsByName("pass")[0].value;
    if (user == "" || pass == "") {
        alert("Username and password must be filled out");
    }
    else if ((user == "ssookoo" || user == "sakter") && (pass == "volume4")){
        z.style.visibility = "visible";
    }
    else{
        alert("Incorrect username or password")
    }
}
