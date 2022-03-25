import {Form,Button, Container,Row,Col, } from 'react-bootstrap';
import React from 'react';
import { Link } from "react-router-dom";



function Register(){


    
    return(
        <>
        <body>
            <Container>
                <Row>
                    <Col sm={5}></Col>
                    <Col>
                        <h1>REGISTER</h1>
                    </Col>
                </Row>
            </Container>
            <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                        Sumbit
                    </Button>
                </div>
                  <Container>
                <Row align="center">
                    <Link to="/">Login</Link>
                </Row>
                </Container>
                </Form>
                </Container>
        </body>    
        </>
    )
}



export default Register;

  