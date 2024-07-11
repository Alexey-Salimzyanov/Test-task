<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

include_once "./db.php";
include_once "./question.php";
include_once "./config.php";

$database = new Database($dbms, $host, $db, $user, $pass);
$pdo = $database->dbConnection();
$question = new Question($pdo);

$data = json_decode(file_get_contents("php://input"));

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    return;
} else if (
    !empty($data->email) &&
    !empty($data->question)
) {
    $question->setEmail($data->email);
    $question->setQuestion($data->question);

    if ($question->create()) {

        http_response_code(201);
        echo json_encode(array("message" => "Успешное создание."), JSON_UNESCAPED_UNICODE);

    }    else {
        http_response_code(503);
        echo json_encode(array("message" => "Невозможно создать вопрос."), JSON_UNESCAPED_UNICODE);	
    }

} else {
    http_response_code(400);
    echo json_encode(array("message" => "Неполные данные."), JSON_UNESCAPED_UNICODE);
}
 // php -c C:/php/php.ini-development -S localhost:8080