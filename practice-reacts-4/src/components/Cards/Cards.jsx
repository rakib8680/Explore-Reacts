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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-20 gap-5'>
            {
                cards.map(SingleCard => <Card card={SingleCard} key={SingleCard.id}></Card>)
            }
        </div>
    );
};

export default Cards;