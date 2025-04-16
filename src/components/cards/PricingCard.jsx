import React from 'react';
import Feature from './Feature';

const PricingCard = ({pricing}) => {
    const {name, price, description, features} = pricing;
    return (
        <div className='flex flex-col p-4 border bg-blue-500 rounded-2xl'>
            <div>
                <h1 className="text-7xl">{name}</h1>
                <h4 className="text-3xl">{price}</h4>
            </div>

            <div className='bg-green-300 rounded-2xl p-3 mt-10 flex-1'>
                <p className='font-bold'>{description}</p>
                {
                    features.map((feature,index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className="btn w-full mt-3">Subscribe</button>
        </div>
    );
};

export default PricingCard;