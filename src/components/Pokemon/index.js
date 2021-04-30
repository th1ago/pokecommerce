import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'; //routing

export default function pokemon({pokemon}) {
    return (
        <Card className='my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white rounded' style={{ border: 'none' }}>
            <Link>
                <Card.Img style={{ width: '8rem' }} src={pokemon.sprites.front_default} variant='top'/>
            </Link>
            <Card.Body className={`${pokemon.types[0].type.name} rounded text-white`}>
                <Link>
                    <Card.Title as='div'><strong>#{pokemon.id} {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong></Card.Title>
                </Link>
            </Card.Body>
        </Card>
    )
}