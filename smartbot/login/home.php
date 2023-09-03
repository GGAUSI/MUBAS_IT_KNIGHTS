<?php 
session_start();

if (isset($_SESSION['account_number']) && isset($_SESSION['account_name'])) {

 ?>
<!DOCTYPE html>
<html>
<head>
	<title>HOME</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
     <h1 class="home-heading">Hello, <?php echo $_SESSION['account_name']; ?></h1>
     <a href="logout.php">Logout</a>
</body>
</html>

<?php 
}else{
     header("Location: index.php");
     exit();
}
 ?>