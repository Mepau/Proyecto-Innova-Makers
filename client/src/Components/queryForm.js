import {Form, Button} from "react-bootstrap"

const QueryForm = (props) => {

    const {handleRadios, handleQuery, handleSubmit} = props.handles

  return (
    <Form>
      <Form.Check
        inline
        type="radio"
        value="Todos"
        label="Todos"
        name="selection"
        defaultChecked
        onClick={handleRadios}
      />
      <Form.Check
        type="radio"
        inline
        value="Amputacion"
        label="Por amputacion"
        name="selection"
        onClick={handleRadios}
      />

      <Form.Check
        type="radio"
        inline
        value="Funcionalidad"
        label="Por funcionalidad"
        name="selection"
        onClick={handleRadios}
      />

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Busca un dispositivo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Realiza tu busqueda aqui"
          onChange={handleQuery}
        />
      </Form.Group>
      <Button type="button" onClick={handleSubmit}>
        Search
      </Button>
    </Form>
  );
};

export default QueryForm;