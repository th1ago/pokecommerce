import React from 'react';
import {Card, CardGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom'; //routing

// exibe o card dos pokemons e seus valores
export default function pokemon({pokemon}) {
    return (
        <CardGroup>
            <Card className='my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white rounded' style={{ border: 'none' }}>
            <Link to="">
                <Card.Img style={{ width: '8rem' }} src={pokemon.sprites.front_default} variant='top'/>
            </Link>
            <Card.Body className={`${pokemon.types[0].type.name} rounded text-white`}>
                <Link to="">
                    <Card.Title as='div'><strong>#{pokemon.id} {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong></Card.Title>
                </Link>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Valor de R$11,11</small>
            </Card.Footer>
        </Card>
        </CardGroup>
    )
}