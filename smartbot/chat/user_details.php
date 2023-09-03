<?php
// Connect to the MySQL database
$conn = new mysqli("localhost", "root", "", "fdh_bank");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Your PHP code to fetch data from the database and generate a response
// ...

// Set the response content type to JSON (adjust if needed)
header("Content-Type: application/json");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query the database and fetch data
$query = "SELECT * FROM customer_bank_details";
$result = $conn->query($query);

// Convert the result to JSON
$data = array();
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

// Close the database connection
$conn->close();

// Return the data as JSON
echo json_encode($data);
?>