<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: DELETE");

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
    !empty($_GET['id'])
){
	$question->setId($_GET['id']);

if ($question->delete()) {
    http_response_code(200);
    echo json_encode(array("message" => "Успешное удаление"), JSON_UNESCAPED_UNICODE);
}else {
    http_response_code(503);
    echo json_encode(array("message" => "Не удалось удалить"));
	}
}else {
		http_response_code(400);
		echo json_encode(array("message" => "Неполные данные."), JSON_UNESCAPED_UNICODE);
	}