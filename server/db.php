<?php
class Database
{
	private $host;
	private $db;
	private $user;
	private $pass;
    private $dbms;
    private $pdo;

    public function __construct($dbms, $host, $db, $user, $pass)
    {
        $this->dbms = $dbms;
        $this->host = $host;
        $this->db   = $db;
        $this->user = $user;
        $this->pass = $pass;
    }

    public function dbConnection()
    {
        if ($this->pdo == null) {
            try {
                $this->pdo = new PDO($this->dbms . ":host=" . $this->host . ";dbname=" . $this->db, $this->user, $this->pass);
            } catch (PDOException $exception) {
                echo "Ошибка подключения: " . $exception->getMessage();
            }
        }

        return $this->pdo;
    }

    public function getHost()
    {
        return $this->host;
    }
    public function getDb()
    {
        return $this->db;
    }
    public function getUser()
    {
        return $this->user;
    }
    public function getPass()
    {
        return $this->pass;
    }
    public function getDBMS()
    {
        return $this->dbms;
    }

    public function setHost($host)
    {
        $this->host = $host;
    }
    public function setDb($db)
    {
        $this->db = $db;
    }
    public function setUser($user)
    {
        $this->user = $user;
    }
    public function setPass($pass)
    {
        $this->pass = $pass;
    }
    public function setDBMS($dbms)
    {
        $this->dbms = $dbms;
    }
}
