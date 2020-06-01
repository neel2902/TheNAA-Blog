import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const Admin = () => {
    return (
        <Form style={{ width: '50%', margin: '3em auto 0' }}>
            <h2>TheNAA Blog login</h2>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
             </Button>

            <Link to='/dashboard'>
                <Button>Link</Button>
            </Link>
        </Form>
    )
}

export default Admin;