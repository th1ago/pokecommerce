import React, { useState } from 'react';
import {Form, Col, Button, Container, Card} from 'react-bootstrap';

import api from '../../services/api';

export default function Search(props) {

    // retorna um valor e uma funcao para atualizar o valor
    const [pokemonName, setPokemonName] = useState("")
    const [pokemon, setPokemon] = useState({
        name: "",
        type: "",
        img: "",
    });

    // retorna o valor convetido para minusculo
    const handleChange = (e) => {
        setPokemonName(e.target.value.toLowerCase());
    };
    
    // cancela o evento, sem para a programacao 
    const handleSubmit = (e) => {
        e.preventDefault();
        getSelectPokemon();
    };
    
    // realiza a busca no api retornando o pokemon
    const getSelectPokemon = async () => {
        
        api.get(`pokemon/${pokemonName}`)
        .then ((response) => {
            setPokemon({
                name: response.data.name,
                type: response.data.types[0].type.name,
                img: response.data.sprites.front_default
            })
            console.log(response);
        })
        .catch((err) => {
            console.error("Pokemon n encontrado" + err)
        })
    };
    
    return (
        <Container>
            <Form.Row className="align-items-center">
                <Col sm={6} className="my-1">
                    <Form.Label htmlFor="inlineFormInputName" srOnly>
                </Form.Label>
                <Form.Control 
                    id="inlineFormInputName"
                    onChange={handleChange}
                    placeholder="Pokemon" />
                </Col>
                <Col xs="auto" className="my-1">
                    <Button block
                        type="submit"
                        onClick={handleSubmit}>
                    Procurar
                    </Button>
                </Col>
            </Form.Row>
            <Card className='my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white rounded' style={{ border: 'none' }}>
                <Card.Img style={{ width: '8rem' }} src={pokemon.img} variant='top'alt="Pokemon"/>
                <Card.Title as='div'><strong>{pokemon.id} {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong></Card.Title>
            </Card>
        </Container>
    )
}