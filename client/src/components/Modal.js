import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { changeQuestion } from '../http/hosts';

const ChangeQuestionModal = ({show, onHide, id, oldEmail, oldQuestion}) => {

    const [email, setEmail] = useState(oldEmail);
	const [question, setQuestion] = useState(oldQuestion);
    useEffect(() => {
        setEmail(oldEmail);
        setQuestion(oldQuestion);
    }, [oldEmail, oldQuestion]);
    const handleInputEmailChange = (event) => {
        setEmail(event.target.value);
    };
	const handleInputQuestionChange = (event) => {
        setQuestion(event.target.value);
    };
    const handleChangeClick = async () => {
        if (email) {
            await changeQuestion(id,email,question);
            onHide();
        }
    };
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Редактировать вопрос</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label style={{fontWeight: "bold"}} className="mt-1">Email</Form.Label>
                        <Form.Control type="text" value={email} onChange={handleInputEmailChange} />
                    </Form.Group>
					<Form.Group className="mb-3">
                        <Form.Label style={{fontWeight: "bold"}} className="mt-1">Вопрос</Form.Label>
                        <Form.Control type="text" value={question} onChange={handleInputQuestionChange} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Закрыть
                </Button>
                <Button variant="primary" disabled={!email} onClick={handleChangeClick}>
                    Изменить
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default ChangeQuestionModal;
