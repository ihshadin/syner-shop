import React, { useState } from 'react';

import Slider from "@kiwicom/orbit-components/lib/Slider";
 
import './PriceRange.css'

const PriceRange = () => {
    const availableFlights = [
        5, 29, 28, 7, 13, 7, 16, 12, 8, 39, 13, 7, 20, 38, 15, 18, 28, 14, 23, 24,
        10,
      ];
      const [priceRange, setPriceRange] = useState([50, 250]);
      const step = 50;
    return (
        <div>
            <Slider
                histogram={true}
                histogramData={availableFlights}
                // histogramDescription={`${selectedFlights} of ${totalFlights} flights`}
                defaultValue={[50, 250]}
                ariaLabel={["Minimum price", "Maximum price"]}
                label=" "
                minValue={0}
                step={step}
                maxValue={1000}
                valueDescription={`$${priceRange[0]}–$${priceRange[1]}`}
                onChange={(sliderValue) => {
                    if (typeof sliderValue === "object") setPriceRange(sliderValue);
                }}
            />
        </div>
    );
};

export default PriceRange;