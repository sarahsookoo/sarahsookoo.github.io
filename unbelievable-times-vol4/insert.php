<?php

$conn = mysqli_connect('localhost', 'root', '', 'surveys');

// Check connection
if ($conn === false) {
    die("ERROR: Could not connect. "
        . mysqli_connect_error());
}

// Taking all 3 values from the form data(input)
$name =  $_REQUEST['name'];
$answer = $_REQUEST['question'];
$comments =  $_REQUEST['comments'];

// Performing insert query execution
// here our table name is survey_one
$sql = "INSERT INTO survey_one (Name, Answer, Comments)  VALUES ('$name', 
            '$answer','$comments')";

if (mysqli_query($conn, $sql)) {
    echo "<h3>data stored in a database successfully.</h3>";

    echo nl2br("\n$name\n $answer\n$comments");
} else {
    echo "ERROR: Hush! Sorry $sql. ";
    mysqli_error($conn);
}

// Close connection
mysqli_close($conn);
?>