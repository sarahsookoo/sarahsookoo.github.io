function checkName(){
    var x = document.getElementsByName("firstname")[0].value;
    if (x == "") {
      alert("Name must be filled out");
    }
    else{
        document.getElementById("name").style.visibility = "hidden";
        document.getElementById("button").style.visibility = "hidden";
        document.getElementById("hello").style.visibility = "visible";
        document.getElementById("demo").innerHTML = x;
    }
}