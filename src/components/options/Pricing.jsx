import React, {use} from 'react';
import PricingCard from '../cards/PricingCard';
import DaisyPricing from '../daisy_pricing/DaisyPricing';

const Pricing = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);

    return (
        <div>
            <h2 className='text-5xl mt-8 mb-8'>Get Our Membership</h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* {
                    pricingData.map(pricing=><PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                } */}

                {
                    pricingData.map(pricing=><DaisyPricing key={pricing.id} pricing={pricing}></DaisyPricing>)
                }
            </div>
        </div>
    );
};

export default Pricing;