import React, { useState } from 'react';
import {Form, Col, Button, Container, Card} from 'react-bootstrap';

import api from '../../services/api';

export default function Search(props) {

    // retorna um valor e uma funcao para atualizar o valor
    const [pokemonName, setPokemonName] = useState("")
    const [pokemon, setPokemon] = useState({
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
            <h1>{pokemon.type}</h1>
            <Card.Img style={{ width: '8rem' }} src={pokemon.img} variant='top'/>
        </Container>
    )
}