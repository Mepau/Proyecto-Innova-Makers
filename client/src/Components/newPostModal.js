import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios"

const NewPostModal = () => {
    const [show, handleShow] = useState();
    const [title, handleTitle] = useState()
    const [description, handleDescription] = useState()

    const handleClose = () => {
        handleShow(!show);
    };

    const handleSubmit = () => {
        let formdata = new FormData();

        axios({
            method: "post",
            url: "/devices/new",
            data: formdata,
            headers: { "Content-Type": `multipart/form-data; boundary=${formdata._boundary}` },
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Agregar nuevo post
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Group className="mb-3">
                                <Form.Label>Titulo</Form.Label>
                                <Form.Control placeholder="Agregue un titulo" onChange={event => handleTitle(event.target.value)} />
                            </Form.Group>
                            <Form.Label>Contenido</Form.Label>
                            <Form.Control as="textarea" rows={3} value={description} />
                        </Form.Group>
                        <Button onClick={handleSubmit}>Enviar idea</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default NewPostModal;