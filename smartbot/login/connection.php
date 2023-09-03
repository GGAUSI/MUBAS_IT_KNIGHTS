<?php

$sname= "localhost";
$unmae= "root";
$password = "";
$database_name = "fdh_bank";

$conn = mysqli_connect($sname, $unmae, $password, $database_name);

if (!$conn) {
	echo "Connection failed!";
}