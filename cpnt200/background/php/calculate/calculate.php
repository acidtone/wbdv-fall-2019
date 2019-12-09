<?php
if ($_POST['submit'] == "Calculate") {
  $calculate = $_POST['a'] + $_POST['b'];
  $answer = $_POST['a']." plus ".$_POST['b']." equals ".$calculate;
} else {
  header("Location: index.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Adding Machine: Answer</title>
  <link rel="stylesheet" href="styles.css">
  <style>
    main {
      max-width: 70ch;
    }
    p {
      margin: auto;
      text-align: center;

      font-family: sans-serif;
      font-size: 3em;
      color: rebeccapurple;
    }
  </style>
</head>
<body>
  <main>
    <p><?php echo $answer; ?></p>
  </main>
</body>
</html>