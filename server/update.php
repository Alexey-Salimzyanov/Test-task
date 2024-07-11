<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: PUT");

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
    !empty($data->id) &&
    !empty($data->email) &&
    !empty($data->question)
) {
    $question->setId($data->id);
    $question->setEmail($data->email);
    $question->setQuestion($data->question);

    if ($question->update()) {
        http_response_code(200);
        echo json_encode(array("message" => "Вопрос был обновлён"), JSON_UNESCAPED_UNICODE);
    }
    else {
        http_response_code(503);
        echo json_encode(array("message" => "Невозможно обновить вопрос"), JSON_UNESCAPED_UNICODE);
}}else {
    http_response_code(400);
    echo json_encode(array("message" => "Неполные данные"), JSON_UNESCAPED_UNICODE);
}