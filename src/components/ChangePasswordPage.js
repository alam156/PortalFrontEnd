import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const ChangePasswordPage = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            console.log(token);
            const response = await axios.post('http://localhost:8085/users-credential', {
                token,
                password,
            });
            setError('');
            // Redirect the user to the login page or another unprotected page
            window.location.href = '/login';
        } catch (error) {
            console.error(error);
            setError('Failed to change password');
        }
    };

    return (
        <Container className="p-3 my-5 d-flex flex-column w-50">
            <h3 className="text-center">Change Password</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter new password" />
                </Form.Group>

                <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm new password" />
                </Form.Group>
                <br/>
                <br/>

                {error && <p className="text-danger">{error}</p>}

                <Button variant="secondary" type="submit">
                    Change Password
                </Button>
            </Form>
        </Container>
    );
}

export default ChangePasswordPage;