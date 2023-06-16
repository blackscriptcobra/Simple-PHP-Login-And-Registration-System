<?php
require_once 'config.php';

$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

function escape($value) {
    global $conn;
    return mysqli_real_escape_string($conn, $value);
}
?>
