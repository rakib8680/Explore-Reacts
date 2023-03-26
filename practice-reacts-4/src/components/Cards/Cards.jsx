import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/ai/tools')
            .then(res => res.json())
            .then(data => setCards(data.data.tools))
    }, [])

    return (
        <div>
            {
                cards.map(SingleCard => <Card card={SingleCard}></Card>)
            }
        </div>
    );
};

export default Cards;