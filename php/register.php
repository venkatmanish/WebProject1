<?php
include_once 'db.php';

$username = $_POST['username'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
$age = $_POST['age'];
$dob = $_POST['dob'];
$contact = $_POST['contact'];

$stmt = $mysqli->prepare("INSERT INTO users (username, password, age, dob, contact) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $username, $password, $age, $dob, $contact);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Registration successful']);
} else {
    echo json_encode(['success' => false, 'message' => 'Registration failed: ' . $stmt->error]);
}

$stmt->close();
$mysqli->close();
?>
