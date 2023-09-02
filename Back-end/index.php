<?php
// Retrieve the POSTed JSON data and decode it
$data = json_decode(file_get_contents("php://input"));

// Access individual data elements
$que = $data->message;

// Perform actions or processing based on the received data

// Create a response (if needed)
$response = array("message" => "Data received successfully!");

// Send the response as JSON
header("Content-Type: application/json");
echo json_encode($response);
?>
