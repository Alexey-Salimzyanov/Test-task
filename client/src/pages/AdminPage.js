import React, { useContext, useEffect, useState} from "react"
import { Button, Table } from "react-bootstrap"
import { deleteQuestion, getQuestions } from "../http/hosts"
import ChangeQuestionModal from "../components/Modal"

const AdminPage =  () =>{

    const [questions,setQuestions] = useState([])

    const [id,setId] = useState([])
    const [email,setEmail] = useState([])
    const [question,setQuestion] = useState([])


    const fetchData = async () => {
        const Data = await getQuestions()
        setQuestions(Data)
    };

    const [showModal, setShowModal] = useState(false)

    const handleShowModal = (itemId,itemEmail,itemQuestion) => {
        setId(itemId)
        setEmail(itemEmail)
        setQuestion(itemQuestion)
        setShowModal(true)
    };

    useEffect(() => {
        fetchData()
    }, [])
    return (
    <> 
    <Table striped bordered hover responsive size className="mt-3 container-sm">
        <thead>
            <tr>
                <th>id</th>
                <th>email</th>
                <th>Вопрос</th>
                <th colSpan={2}>Действия</th>
            </tr>
        </thead>
        <tbody>
        {questions.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.question}</td>
                            <td><Button variant="outline-danger" onClick={async () => {await deleteQuestion(item.id);fetchData();}} >Удалить</Button></td>
                            <td><Button variant="outline-primary" onClick={() => handleShowModal(item.id,item.email,item.question)}>Редактировать</Button></td>
                        </tr>
                    ))}
        </tbody>
    </Table>
    <ChangeQuestionModal show={showModal} onHide={() => {setShowModal(false);fetchData()}} id={id} oldEmail={email} oldQuestion={question} />
    </>
    );
}
export default AdminPage;
