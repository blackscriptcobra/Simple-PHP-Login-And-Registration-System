<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $newUsername = $_POST['newUsername'];
  $newPassword = $_POST['newPassword'];

  $conn = new mysqli('localhost', 'username', 'password', 'database_name');
  if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
  }

  $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
  $stmt->bind_param("ss", $newUsername, $newPassword);
  if ($stmt->execute()) {
    echo 'Registration successful!';
  } else {
    echo 'Error occurred during registration.';
  }

  $stmt->close();
  $conn->close();
}
?>
