import { useRef, useState } from "react";
import { Container, Card, Button, Col, Form, Alert, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Login({ onLogin }) {

  const navigate = useNavigate();
  const userId = useRef();
  const password = useRef();
  const [msg, setMsg] = useState();

  const handleLogin = (event) => {
    event.preventDefault();
    const username = userId.current.value;
    const passwordValue = password.current.value;

    if (username === "admin" && passwordValue === "1234"){
        alert("Login Success!")
        onLogin();
        navigate('/slotlist');
    } else {
        setMsg("Invalid credentials");
    }
  };

  return ( 
    <div id="login" style={{ minHeight: "100vh",display: "flex",justifyContent: "center", alignItems: "center", }}>
      <Container>
        <div className="d-flex align-items-center justify-content-center mb-4">
          <h1 className="text">Vending Machine</h1>
        </div>
        <Col xs={12} md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Header>Login</Card.Header>
            <Card.Body className="text-center">
              { msg && <Alert variant="danger">{ msg }</Alert>}
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                  <Form.Label>User ID</Form.Label>
                  <Form.Control type="text" placeholder="Enter User ID" ref={userId}/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter Password" ref={password}/>
                </Form.Group>
                <Button variant="primary" className="btn btn-block" type="submit">Login</Button>
              </Form>
            </Card.Body>
            <Button variant="secondary" className="btn btn-block"> <Link className="text-light text-decoration-none" to={"/"}>
                    Return to Buying Screen
                </Link></Button>
          </Card>
        </Col>   
      </Container>
    </div>
  );
}

export default Login;
