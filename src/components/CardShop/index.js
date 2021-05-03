import React from 'react';
import {Button} from 'react-bootstrap';

export default function Shop() {

    const shop = (e) => {
        return (
            alert("Desculpe o transtorno. \nEstamos trabalhando para melhor atende-los")
        )
    }

    return (
        <Button 
            type="submit"
            onClick={shop}>
        Shop
        </Button>

    )
}