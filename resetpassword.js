import React from 'react';
import {Card,Button,Container,Form,Row} from 'react-bootstrap';
import './App.css';
import { Link } from "react-router-dom";




function Resetpassword(){
  
    return(
        <>
         <body>
            <Container align="center" className="bg">
                    <Card  style={{ width:'30rem'}}>
                        <Card.Header className="bg-primary text-white text-center" >RESET PASSWORD</Card.Header>
                        <Card.Body>
                            <Container align="left">
                            <Form.Label htmlFor="inputPassword5">Old Password</Form.Label>
                                <Form.Control type="password" id="inputPassword5" aria-describedby="passwordHelpBlock"/>

                                <Form.Label htmlFor="inputPassword5">New Password</Form.Label>
                                <Form.Control type="password" id="inputPassword5" aria-describedby="passwordHelpBlock"/>

                                <Form.Label htmlFor="inputPassword5">Confirm Password</Form.Label>
                                <Form.Control type="password" id="inputPassword5" aria-describedby="passwordHelpBlock"/>
                                    <Container>
                                        <Card className="bg-danger text-white">
                                            <Card.Body>Your old password and new password is same,please try with different password</Card.Body>
                                        </Card>
                                    </Container>                          
                                <Container align="center">
                                <Button variant="primary">
                                    Sumbit
                                </Button>
                                </Container>
                            </Container>
                            <Container>
                                <Row align="center">
                                    <Link to="/">Login</Link>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>   
            </Container>
          </body>  
        </>
    )
    
}
export default Resetpassword;