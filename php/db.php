<?php
// MySQL connection parameters
$servername = "your_mysql_host";
$username = "your_mysql_username";
$password = "your_mysql_password";
$dbname = "your_mysql_database";

// Create connection
$mysqli = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}
?>
