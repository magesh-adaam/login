import {Form,Button, Container,Row,Col, } from 'react-bootstrap';
import React,{ useState } from 'react';
import { Link, useNavigate } from "react-router-dom";


function Login(){

 const navigate=useNavigate();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();




 const submit = (data) => {
    console.log("annn");
    console.log(data);
    let date=new Date();
    navigate('/dashboard',{state:{email:email,password:password,date:date}})
}
    


    return(
        <>
        <body>
            <Container>
                <Row>
                    <Col sm={5}></Col>
                    <Col>
                        <h1>LOGIN</h1>
                    </Col>
                </Row>
            </Container>
            <Container>
            <Form onSubmit={submit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={email} onChange={ (event) => setEmail(event.target.value) } placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={password} onChange={ (event) => setPassword(event.target.value) } placeholder="Password" />
                </Form.Group>
                
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" type="submit">
                        Sumbit
                    </Button>
                </div>
                <Container>
                <Row>
                    <Col sm={2}>
                        <Form.Text className="text-muted">
                            Forgot Password?
                        </Form.Text>
                    </Col>
                    <Col sm={2}>
                        <Link to="/Reset">Reset password</Link>
                    </Col>
                </Row>
                </Container>
                <Container>
                <Row>
                    <Col sm={2}>
                        <Form.Text className="text-muted">
                            Don't have an account?
                        </Form.Text>
                    </Col>
                    <Col sm={2}>
                    <Link to="/register">Create Account</Link>
                    </Col>
                </Row>
                </Container>
                </Form>
            </Container>
        </body>    
        </>
    )
}



export default Login;

  