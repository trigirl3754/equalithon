import React, { useState } from 'react';
import Navigation from './landingPage/navigation/Navigation';
import { Form } from 'react-bootstrap';
//import Row from 'react-bootstrap/Row';
//import Column from 'react-bootstrap/Column';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <>
            <Navigation />
            <div className="SignIn">
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlID="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group size="lg" controlID="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            autoFocus
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                        SignIn
                    </Button>
                </Form>
            </div>
        </>
    );
}
