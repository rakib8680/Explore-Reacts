import React from 'react';

const Card = (props) => {
    // console.log(props)

    const { image, name, published_in, features, id } = props.card
    console.log(features)
    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                    <img className='w-full' src={image} />
                </figure>
                <div className="card-body">
                    <h3 className="card-title">Features:</h3>
                    {
                        features.map((feature, index) => <p className='text-left'>{index + 1}.{feature}</p>)
                    }

                    <hr className='border-primary border-1' />
                    
                    <h2 className="card-title font-bold">{name}</h2>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;