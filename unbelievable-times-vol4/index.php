<!DOCTYPE html>
<html lang="en">
<link rel="stylesheet" href="styles.css">
<link rel="shortcut icon" type="image/jpg" href="LOGO.jpg" />


<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Volume 4</title>
</head>

<body>
  <header>
    <h1>Unbelievable Times Volume 4</h1>
    <h3>Each newsletter comes with a survey.</h3>
  </header>

  <form action="insert.php" method="POST">
      <label for="name">Enter your name:</label>
      <input type="text" name="name" id="name" placeholder="Name" />
      <br> <br>
      <label for="question">Question</label>
      <input type="text" name="question" id="question" placeholder="Your Answer" />
      <br> <br>
      <label for="comments">Any questions, comments, or concerns?</label>
      <input type="text" name="comments" id="comments" placeholder="Comments" />
      <br> <br>
      <!-- <button id="btn">Submit</button> -->
      <input type="submit" value="Submit" id="submit" name="submit">
      <br> <br>
  </form>

</body>

<!-- <div class="answers">
  <div style="margin: 1%;">
    <p style="color: red;"> Authorized Use Only</p>
    <input name="name" id="username" type="text" placeholder="Username">
    <br> <br>
    <input name="pass" id="password" type="text" placeholder="Password">
    <button onclick="validation()"> Enter </button>
  </div>
  
</div>

<p style="visibility: hidden;" id="msg"> </p>
<pre></pre> -->

<!-- <footer>
  <h1 >SAS</h1>
</footer> -->

</html>