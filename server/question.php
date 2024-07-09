<?php
class Question
{
    private $conn;
    private $table_name = "questions";

    private $id;
    private $email;
    private $question;

    public function __construct($pdo)
    {
        $this->conn = $pdo;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function getQuestion()
    {
        return $this->question;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function setEmail($email)
    {
        $this->email = $email;
    }

    public function setQuestion($question)
    {
        $this->question = $question;
    }

	public function read()
	{
		$query = "SELECT * FROM " . $this->table_name ;
		$stmt = $this->conn->prepare($query);
		$stmt->execute();
		
		return $stmt;
	}
	
	function create()
	{
		$query = "INSERT INTO " . $this->table_name . " (email, question) VALUES (:email, :question)";

		$stmt = $this->conn->prepare($query);

		$this->email = htmlspecialchars(strip_tags($this->email));
		$this->question = htmlspecialchars(strip_tags($this->question));

		$stmt->bindParam(":email", $this->email);
		$stmt->bindParam(":question", $this->question);

		if ($stmt->execute()) {
			return true;
		}
		return false;
	}

    public function update()
    {
        $query = "UPDATE " . $this->table_name . "
            SET
                email = :email,
                question = :question
            WHERE
                id = :id";
    
        $stmt = $this->conn->prepare($query);
    
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->question = htmlspecialchars(strip_tags($this->question));
        $this->id = htmlspecialchars(strip_tags($this->id));
    
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":question", $this->question);
        $stmt->bindParam(":id", $this->id);
    
        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    public function delete()
    {
    $query = "DELETE FROM " . $this->table_name . " WHERE id = :id";

    $stmt = $this->conn->prepare($query);

    $this->id = htmlspecialchars(strip_tags($this->id));

    $stmt->bindParam(":id", $this->id);

    if ($stmt->execute()) {
        return true;
    }
    return false;
}

}