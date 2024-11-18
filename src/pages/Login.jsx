import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';

const login = () => {
  return (
    <div>
      <Container style={{ backgroud: "blue", height: "100vh"}}
        className="material-symbols-outlined">

        
        <span class="material-symbols-outlined">login</span>

        {/* Caxinha de email */}
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>

        {/* Caxinha de senha  */}
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>

        <Button variant="dark" className="mt=4">Enviar</Button>
      
  
      </Container>
    </div>
  );
};

export default login;
