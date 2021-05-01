import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Row, Col } from 'react-bootstrap';

// Components
import Pokemon from '../../components/Pokemon/index';

const Homepage = () => {

    const [pokemon, setPokemon] = useState([]); 
    
    // retorn ate 151 pokemons
    const getPokemonList = async () => {
        let pokemonArray = [];
        for(let i = 1; i <= 151; i ++){ 
            pokemonArray.push(await getPokemonData(i));
        }
        setPokemon(pokemonArray);
    }

    // realiza um get dos dados dos pokemons
    const getPokemonData = async (id) => {
        const res = await api.get(`/pokemon/${id}`);
        return res;
    }

    // sera executada depois que a renderizacao estiver disponivel na tela
    useEffect(() => {
        getPokemonList();
    }, [])

    // demonstra os cads dos pokemons
    return (    
        <Row>
            {pokemon.map(poke =>(
                <Col key={poke.data.name} xs={12} sm={12} md={2} lg={2} xl={3}>
                    <Pokemon pokemon={poke.data}/>
                </Col>
            ))}
        </Row>
    )
}

export default Homepage