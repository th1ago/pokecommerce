import React from 'react';
import {Navbar, Container,} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap' // behave like a react router

// component
import Search from '../SearchBar/index'

export default function Header(){
    return (
        <header>
            <Navbar>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>PokeCommerce</Navbar.Brand>
                    </LinkContainer>
                    <Search />
                </Container>
            </Navbar>
        </header>
    )
}