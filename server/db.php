<?php
class Database
{
	private $host = 'localhost';
	private $db   = 'test_task_db';
	private $user = 'postgres';
	private $pass = 'OFSHe23jfaF1';
    private $pdo;

    public function dbConnection()
    {
        if ($this->pdo == null) {
            try {
                $this->pdo = new PDO("pgsql:host=" . $this->host . ";dbname=" . $this->db, $this->user, $this->pass);
            } catch (PDOException $exception) {
                echo "Ошибка подключения: " . $exception->getMessage();
            }
        }
        return $this->pdo;
    }
}
