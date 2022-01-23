<?php

// servername => localhost
// username => root
// password => empty
// database name => staff

$host = "sql5.freesqldatabase.com";
$dbUsername = "sql5467617";
$dbPassword = "DYqsevJyBr";
$dbName = "sql5467617";

$conn = mysqli_connect($host, $dbUsername, $dbPassword, $dbName);

// Check connection
if ($conn === false) {
    die("ERROR: Could not connect. "
        . mysqli_connect_error());
}

// Taking all 5 values from the form data(input)
$name =  $_REQUEST['name'];
$answer = $_REQUEST['question'];
$comments =  $_REQUEST['comments'];


// Performing insert query execution
// here our table name is college
$sql = "INSERT INTO survey_one  VALUES ('$name', 
            '$answer','$comments')";

if (mysqli_query($conn, $sql)) {
    echo "<h3>data stored in a database successfully."
        . " Please browse your localhost php my admin"
        . " to view the updated data</h3>";

    echo nl2br("\n$name\n $answer\n "
        . "$comments");
} else {
    echo "ERROR: Hush! Sorry $sql. "
        . mysqli_error($conn);
}

// Close connection
mysqli_close($conn);
?>