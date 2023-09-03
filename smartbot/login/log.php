<?php
// Check if a session is active; if not, start a new session
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

// Include the "connection.php" file to establish a database connection
include "connection.php";

// Check if the 'bank_username' and 'pin' POST parameters are set
if (isset($_POST['bank_username']) && isset($_POST['pin'])) {
    // Define a function to validate user input data
    function validate($data) {
        // Trim whitespace from the input data
        $data = trim($data);
        // Remove backslashes from the input data
        $data = stripslashes($data);
        // Convert special characters to HTML entities for security
        $data = htmlspecialchars($data);
        return $data;
    }

    // Validate and store 'bank_username' and 'pin' from the POST data
    $bank_username = validate($_POST['bank_username']);
    $pass = validate($_POST['pin']);

    // Check if 'bank_username' is empty; if so, redirect with an error message
    if (empty($bank_username)) {
        header("Location: index.php?error=Account Name is required");
        exit();
    } else if (empty($pass)) {
        // Check if 'pin' is empty; if so, redirect with an error message
        header("Location: index.php?error=PIN is required");
        exit();
    } else {
        // SQL query to retrieve data from the database based on 'bank_username' and 'Pin'
        $sql = "SELECT * FROM customer_bank_details WHERE account_name='$bank_username' AND Pin='$pass'";

        // Execute the SQL query
        $result = mysqli_query($conn, $sql);

        // Check if exactly one row was returned from the database
        if (mysqli_num_rows($result) === 1) {
            // Fetch the row as an associative array
            $row = mysqli_fetch_assoc($result);

            // Check if the 'account_name' and 'Pin' match the user input
            if ($row['account_name'] === $bank_username && $row['Pin'] === $pass) {
                // Store user information in session variables
                $_SESSION['account_name'] = $row['account_name'];
                $_SESSION['Pin'] = $row['Pin'];
                $_SESSION['account_type'] = $row['account_type'];
                $_SESSION['bank_balance'] = $row['bank_balance'];
                $_SESSION['branch_name'] = $row['branch_name'];
                $_SESSION['account_number'] = $row['account_number'];

                
                
            
                

                // Redirect to "home.php" upon successful login
                header("Location: ../chat");
                exit();
            } else {
                // Redirect with an error message for incorrect account name or PIN
                header("Location: index.php?error=Incorrect Account name or PIN");
                // Display a JavaScript alert
                echo '<script>alert("Hello");</script>';
                exit();
            }
        } else {
            // Redirect with an error message for incorrect account name or PIN
            header("Location: index.php?error=Incorrect account name or PIN");
            exit();
        }
    }
} else {
    // Redirect to "index.php" if 'bank_username' and 'pin' were not set
    header("Location: index.php");
    exit();
}
?>
