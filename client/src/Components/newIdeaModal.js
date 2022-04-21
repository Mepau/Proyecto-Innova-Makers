import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { ImageUpload } from "./ImageUploader";
import axios from "axios"

const NewIdeaModal = () => {
  const [show, handleShow] = useState();
  const [selectedFile, setSelectedFile] = useState()
  const [description, handleDescriptionChange] = useState()
  const [amputationTags, handleATagsChange] = useState()
  const [functionalTags, handleDTagsChange] = useState()

  const handleClose = () => {
    handleShow(!show);
  };

  const handleSubmit= () => {
    let formdata = new FormData();
    formdata.append("file", selectedFile);
    formdata.append("description", description);
    formdata.append("amputationTags", amputationTags);
    formdata.append("functionalTags", functionalTags);
    //axios.post('/devices/new', formdata, {
    //  headers: {
    //   'content-type': 'multipart/form-data' // do not forget this 
    //  }})

    for (var key of formdata.entries()) {
      console.log(key[0] + ', ' + key[1]);
  }

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
        Agregar nueva idea
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nueva idea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripcion del dispositivo</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={event => handleDescriptionChange(event.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Etiquetas de funcionabilidad</Form.Label>
              <Form.Control placeholder="limitada, completa" onChange={event => handleATagsChange(event.target.value)}  />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Etiquetas por amputacion </Form.Label>
              <Form.Control placeholder="mano, debajo del codo" onChange={event => handleDTagsChange(event.target.value)}   />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Persona</Form.Label>
              <Form.Control placeholder="Nombre o correo de la persona" value="" disabled />
            </Form.Group>
            <ImageUpload selectedFile={selectedFile} setSelectedFile={setSelectedFile}/>
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

export default NewIdeaModal;
