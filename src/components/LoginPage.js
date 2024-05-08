import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from "axios";
import Cookies from 'js-cookie';
import { ReCAPTCHA } from 'react-google-recaptcha';
import NavBar from "./Navbar";
import backgroundImage from "./album/event_background.jpeg";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    //const [captchaResponse, setCaptchaResponse] = React.useState('');
    /*const handleCaptchaChange = (response) => {
        setCaptchaResponse(response);
    };*/


    const handleSubmit = async  (e) => {
        e.preventDefault();
        console.log(`Email: ${username}, Password: ${password}`);
        try {
            const response = await axios.post('http://localhost:8085/authenticate', {
                username,
                password,
            });
            // Store the token in local storage or a cookie
            Cookies.set('token', response.data);
            setIsLoggedIn(true);
            // Redirect the user to the home page or another protected page
            window.location.href = '/';
        } catch (error) {
            console.error(error);
        }
        // Add API call or authentication logic here
    };

    return (
        <div>
            <div className="navbar-fixed"> <NavBar />
            </div>
            <div>
                <br/>
                <br/>
            </div>
            <div style={{ backgroundImage: `url(${backgroundImage})`, height: '100px',display: 'flex',
                justifyContent: 'center',
                alignItems: 'center' }}>
                <h2>Login Page</h2>
            </div>
            <Container className="p-3 my-5 d-flex flex-column w-50">
                <h3 className="text-center">Login</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
                    </Form.Group>
                    <br/>
                    {/*<ReCAPTCHA
                    sitekey={process.env.REACT_APP_SITE_KEY}
                    onChange={handleCaptchaChange}
                />*/}
                    <Button variant="secondary" type="submit">
                        Login
                    </Button>
                </Form>
                <p className="text-center">
                    Don't have an account? <a href="/registration">Sign up</a>
                </p>

            </Container>
        </div>

    );
}

export default LoginPage;