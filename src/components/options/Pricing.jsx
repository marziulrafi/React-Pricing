import React, {use} from 'react';
import PricingCard from '../cards/PricingCard';

const Pricing = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);

    return (
        <div>
            <h2 className='text-5xl mt-8 mb-8'>Get Our Membership</h2>

            <div className='grid grid-cols-3 gap-8'>
                {
                    pricingData.map(pricing=><PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default Pricing;