<?php
$host = 'localhost';
$db   = 'test_task_db';
$user = 'postgres';
$pass = 'OFSHe23jfaF1';

$dsn = "pgsql:host=$host;dbname=$db";

$pdo = new PDO($dsn, $user, $pass);
?>