import React from 'react';
import {Navbar, Container, Form, Col, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap' // behave like a react router

const Header = () => {
    return (
        <header>
            <Navbar>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>PokeCommerce</Navbar.Brand>
                    </LinkContainer>
                    <Form.Row className="align-items-center">
                        <Col sm={6} className="my-1">
                            <Form.Label htmlFor="inlineFormInputName" srOnly>
                                Name
                            </Form.Label>
                            <Form.Control id="inlineFormInputName" placeholder="Pokemon" />
                        </Col>
                        <Col xs="auto" className="my-1">
                            <Button type="submit">Procurar</Button>
                        </Col>
                    </Form.Row>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;