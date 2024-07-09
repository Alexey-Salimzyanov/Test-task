<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods:  GET");


include_once "./db.php";
include_once "./question.php";

$database = new Database();
$pdo = $database->dbConnection();

$question_object = new Question($pdo);
 
$stmt = $question_object->read();
$num = $stmt->rowCount();

if ($num > 0) {

    $questions_arr = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $question_item = array(
            "id" => $id,
            "email" => $email,
            "question" => $question,
        );
        array_push($questions_arr, $question_item);
    }

    http_response_code(200);
    echo json_encode($questions_arr);

}else {
    http_response_code(404);
    echo json_encode(array("message" => "Вопросы не найдены."), JSON_UNESCAPED_UNICODE);
}

