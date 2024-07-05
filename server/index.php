<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

$data = json_decode(file_get_contents('php://input'), true);

$email = $data['email'];
$question = $data['question'];
if (!empty($email) && !empty($question)) {
    error_log($email);
    error_log($question);
	
    require 'db.php';

    $sql = "INSERT INTO questions (email, question) VALUES ('$email', '$question')";
    $pdo->exec($sql);

    header('Content-Type: application/json');
    echo json_encode(['status' => 'success', 'email' => $email]);
}

// php -c C:/php/php.ini-development -S localhost:8080
?>



