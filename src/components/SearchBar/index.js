import React, { useState } from 'react';
import {Form, Col, Button, Card} from 'react-bootstrap';

import api from '../../services/api';

export default function Search(props) {

    const [pokemon, setPokemon] = useState("pikachu");
    const [pokemonData, setPokemonData] = useState([]);

    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase());
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
    };
    
    const getPokemon = async () => {
        const toArray = [];
        try {
          const resp = await api.get(`/pokemon/${pokemon}`);
          toArray.push(resp.data);
          setPokemonData(toArray);
          console.log(resp)
        } catch (e) {
          console.log(e);
        }
        console.log(pokemonData);

        return (
            <Card.Img style={{ width: '8rem' }} src={pokemon.sprites.front_default} variant='top'/>
        );
    };
    
    return (
        <Form.Row className="align-items-center">
            <Col sm={6} className="my-1">
                <Form.Label htmlFor="inlineFormInputName" srOnly>
                Pokemon
                </Form.Label>
                <Form.Control 
                    id="inlineFormInputName"
                    onChange={handleChange}
                    placeholder="Pokemon" />
            </Col>
            <Col xs="auto" className="my-1">
                <Button 
                    type="submit" 
                    onClick={handleSubmit}>
                Procurar
                </Button>
            </Col>
        </Form.Row>        
    )
}